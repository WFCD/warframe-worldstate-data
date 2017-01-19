#!/usr/bin/env python3
import json, os

data_dir = os.path.join(os.path.dirname(__file__), "..", "data")

with open(os.path.join(data_dir, "languages.json")) as f:
    data = json.load(f)

with open(os.path.join(data_dir, "languages_sorted.json"), "w") as f:
    f.write(json.dumps(data, indent=4, sort_keys=True))

print("language.json has been sorted!")