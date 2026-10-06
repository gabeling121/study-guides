"""Builds docs/7th-grade/sumer/mapdata.js (bonus Map tab) from Natural Earth data.
Reuses the map helpers in tools/roman-map/build.py (geojson files live there; see README).
Run: python tools/sumer-map/build.py
"""
import json, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(HERE, "..", "roman-map"))
import build as B  # noqa: E402

OUT = os.path.join(HERE, "..", "..", "docs", "7th-grade", "sumer", "mapdata.js")
B.MAPS["sumer"] = dict(ext=(27.0, 57.0, 23.0, 40.5))
B.TARGET_W = 900.0
TIGRIS = {"Tigris", "Dicle"}
EUPHRATES = {"Euphrates", "Firat", "Al Furat"}
B.RIVER_TARGETS = TIGRIS | EUPHRATES

PLACES = [
    dict(id="fertile", name="Fertile Crescent", kind="region", lab=(38.6, 36.4),
         shape=[(34.3, 31.2), (35.0, 33.0), (35.8, 35.5), (36.2, 36.6), (38.0, 37.6), (40.5, 37.9), (42.5, 37.6),
                (44.5, 36.6), (45.5, 35.0), (46.5, 33.5), (47.8, 31.5), (48.6, 30.0), (47.0, 30.2), (45.5, 31.0),
                (44.0, 32.3), (42.5, 33.8), (41.0, 35.0), (39.5, 35.8), (38.0, 35.6), (37.0, 34.5), (36.3, 33.0),
                (35.6, 31.5), (35.0, 30.8)]),
    dict(id="meso", name="Mesopotamia", kind="region", lab=(43.0, 34.6),
         shape=[(39.5, 37.2), (41.5, 37.3), (43.5, 36.8), (44.8, 35.0), (45.8, 33.5), (47.0, 31.5), (48.0, 30.4),
                (47.2, 30.3), (46.0, 30.8), (44.6, 31.8), (43.6, 33.2), (42.0, 34.3), (40.6, 35.3), (39.0, 36.2), (38.5, 36.9)]),
    dict(id="sumer", name="Sumer", kind="region", lab=(45.2, 32.25),
         shape=[(44.6, 32.4), (45.8, 32.4), (46.8, 31.6), (47.8, 30.6), (47.2, 30.0), (46.0, 30.4), (45.0, 31.0), (44.3, 31.8)]),
    dict(id="gulf", name="Persian Gulf", kind="sea", lab=(51.5, 27.0),
         shape=[(47.5, 30.5), (50.5, 30.3), (56.5, 27.2), (56.4, 24.0), (51.0, 23.5), (48.0, 27.5), (47.6, 29.5)]),
    dict(id="med", name="Mediterranean Sea", kind="sea", lab=(31.5, 33.6),
         shape=[(27.0, 30.8), (27.0, 37.0), (36.5, 37.0), (36.5, 30.5)]),
    dict(id="tigris", name="Tigris River", kind="river", river=TIGRIS, lab=(44.6, 35.3)),
    dict(id="euphrates", name="Euphrates River", kind="river", river=EUPHRATES, lab=(40.6, 34.2)),
    dict(id="ur", name="Ur", kind="city", at=(46.103, 30.962)),
    dict(id="uruk", name="Uruk", kind="city", at=(45.636, 31.322)),
    dict(id="eridu", name="Eridu", kind="city", at=(45.996, 30.816)),
]


def main():
    B.set_map("sumer")
    land = B.build_polys("ne_10m_land.geojson", tol=0.3, min_extent=1.0)
    lakes = B.build_polys("ne_10m_lakes.geojson", tol=0.3, min_extent=5, filt=lambda p: (p.get("scalerank") or 99) <= 4)
    rivers = B.build_rivers(None, maxrank=6)
    out = []
    for p in PLACES:
        d = dict(id=p["id"], name=p["name"], kind=p["kind"])
        if "shape" in p:
            d["path"] = B.P(p["shape"])
        if "river" in p:
            d["path"] = B.build_rivers(p["river"], tol=0.25)
        if "at" in p:
            d["at"] = [round(v, 1) for v in B.proj(*p["at"])]
        if "lab" in p:
            d["lab"] = [round(v, 1) for v in B.proj(*p["lab"])]
        out.append(d)
    # zoomed view around Sumer's cities: lon 44.4-47.6, lat 30.2-32.6
    x0, y0 = B.proj(44.4, 32.6)
    x1, y1 = B.proj(47.6, 30.2)
    data = dict(w=B.W, h=B.H, land=land, lakes=lakes, rivers=rivers, frame=f"M0,0H{B.W}V{B.H}H0Z", places=out,
                zoom=[round(x0, 1), round(y0, 1), round(x1 - x0, 1), round(y1 - y0, 1)])
    with open(OUT, "w", encoding="utf-8") as f:
        f.write("window.SUMERMAP=" + json.dumps(data, separators=(",", ":")) + ";\n")
    print("mapdata.js", os.path.getsize(OUT), "bytes", B.W, "x", B.H)


if __name__ == "__main__":
    main()
