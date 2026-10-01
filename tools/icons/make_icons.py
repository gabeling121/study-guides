"""Makes the launcher icons: docs/icon-*.png (all grades) and docs/<grade>/icon-*.png (big grade number).
Run: python tools/icons/make_icons.py"""
import math, os, struct, zlib

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "docs")
# 7-segment digit shapes: segments a b c d e f g
SEG = {"4": "bcfg", "7": "abc", "1": "bc", "2": "abged", "3": "abgcd", "5": "afgcd", "6": "afgedc", "8": "abcdefg", "9": "abcdfg", "0": "abcdef"}


def png(path, n, pixel):
    rows = []
    for y in range(n):
        row = bytearray([0])
        for x in range(n):
            row += bytes(pixel(x / n, y / n))
        rows.append(bytes(row))
    ch = lambda t, d: struct.pack(">I", len(d)) + t + d + struct.pack(">I", zlib.crc32(t + d) & 0xFFFFFFFF)
    open(path, "wb").write(b"\x89PNG\r\n\x1a\n" + ch(b"IHDR", struct.pack(">IIBBBBB", n, n, 8, 2, 0, 0, 0))
                           + ch(b"IDAT", zlib.compress(b"".join(rows), 9)) + ch(b"IEND", b""))


def hexrgb(h):
    return tuple(int(h[i:i + 2], 16) for i in (1, 3, 5))


def in_digit(d, u, v):
    # digit box: x .32-.68, y .2-.8, stroke .09
    x0, x1, y0, y1, ym, t = .32, .68, .2, .8, .5, .09
    segs = {
        "a": (x0, y0, x1, y0 + t), "d": (x0, y1 - t, x1, y1), "g": (x0, ym - t / 2, x1, ym + t / 2),
        "f": (x0, y0, x0 + t, ym + t / 2), "e": (x0, ym - t / 2, x0 + t, y1),
        "b": (x1 - t, y0, x1, ym + t / 2), "c": (x1 - t, ym - t / 2, x1, y1),
    }
    return any(a <= u <= c and b <= v <= e for s in SEG[d] for (a, b, c, e) in [segs[s]])


def grade_icon(path, n, color, digit):
    col = hexrgb(color)
    png(path, n, lambda u, v: (255, 255, 255) if in_digit(digit, u, v) else col)


def root_icon(path, n, c1, c2):
    a, b = hexrgb(c1), hexrgb(c2)
    def px(u, v):
        # three "books" on a shelf
        for (x0, x1, c) in [(.2, .36, a), (.4, .56, b), (.6, .76, (242, 183, 5))]:
            if x0 <= u <= x1 and .22 <= v <= .74:
                return (255, 255, 255) if .3 <= v <= .34 else c
        if .2 <= u <= .8 and .76 <= v <= .8:
            return (90, 70, 50)
        return (59, 63, 70)
    png(path, n, px)


if __name__ == "__main__":
    import json
    data = json.load(open(os.path.join(ROOT, "apps.json"), encoding="utf-8"))
    for s in (180, 192, 512):
        root_icon(os.path.join(ROOT, f"icon-{s}.png"), s, data["grades"][0]["color"], data["grades"][-1]["color"])
        for g in data["grades"]:
            os.makedirs(os.path.join(ROOT, g["id"]), exist_ok=True)
            grade_icon(os.path.join(ROOT, g["id"], f"icon-{s}.png"), s, g["color"], g["id"][0])
    print("icons written")
