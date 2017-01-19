#Python 3.4
import json, os

script_dir = os.path.dirname(__file__)
script_dir += "" if script_dir == "" else os.path.sep

data_dir = script_dir + ".." + os.path.sep + "data" + os.path.sep

with open(os.path.join(data_dir, "languages.json")) as f:
    data = json.load(f)

with open(os.path.join(data_dir, "languages_sorted.json"), "w") as f:
    f.write(json.dumps(data, indent=4, sort_keys=True))

print("language.json has been sorted!")