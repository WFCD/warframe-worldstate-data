import Ajv from "ajv";
import addFormats from "ajv-formats";
import * as chai from "chai";
import chaiJson from "chai-json";

import synthTargets from "../data/synthTargets.json" with { type: "json" };

chai.use(chaiJson);
chai.should();

const synthTargetsSchema = {
  definitions: {
    enemy: {
      type: "string",
      enum: [
        "Corpus",
        "Corrupted",
        "Crossfire",
        "Grineer",
        "Infested",
        "Orokin",
        "Sentient",
        "Tenno",
      ],
    },
    missionType: {
      type: "string",
      enum: [
        "Ancient Retribution",
        "Arena",
        "Assassination",
        "Assault",
        "Capture",
        "Conclave",
        "Dark Sector Defection",
        "Dark Sector Defense",
        "Dark Sector Disruption",
        "Dark Sector Excavation",
        "Dark Sector Sabotage",
        "Dark Sector Survival",
        "Defense",
        "Disruption",
        "Excavation",
        "Extermination (Archwing)",
        "Extermination",
        "Free Roam",
        "Hijack",
        "Hive",
        "Hive Sabotage",
        "Interception",
        "Interception (Archwing)",
        "Mobile Defense",
        "Mobile Defense (Archwing)",
        "Orokin Sabotage",
        "Orphix",
        "Pursuit (Archwing)",
        "Relay",
        "Rescue",
        "Rush (Archwing)",
        "Sabotage",
        "Sabotage (Archwing)",
        "Skirmish",
        "Spy",
        "Survival",
        "Volatile",
      ],
    },
    location: {
      type: "object",
      properties: {
        last_verified: { type: "string", format: "date" },
        level: { type: "string", pattern: "^\\d+-\\d+$" },
        faction: { type: "string" },
        spawn_rate: { type: "string" },
        mission: { type: "string" },
        planet: { $ref: "#/definitions/planet" },
        type: { $ref: "#/definitions/missionType" },
      },
    },
    planet: {
      type: "string",
      enum: [
        "Mercury",
        "Venus",
        "Earth",
        "Mars",
        "Saturn",
        "Jupiter",
        "Void",
        "Phobos",
        "Pluto",
        "Eris",
        "Europa",
        "Derelict",
        "Deimos",
        "Lua",
        "Ceres",
        "Sedna",
        "Uranus",
      ],
    },
    target: {
      type: "object",
      properties: {
        name: { type: "string" },
        imageKey: { type: "string" },
        locations: {
          type: "array",
          minItems: 1,
          uniqueItems: true,
          items: {
            $ref: "#/definitions/location",
          },
        },
        enemy: { $ref: "#/definitions/enemy" },
        type: { $ref: "#/definitions/missionType" },
      },
      required: ["name", "imageKey", "locations"],
    },
  },
  type: "array",
  items: {
    $ref: "#/definitions/target",
  },
  minItems: 39,
  uniqueItems: true,
};

describe("synthTargets.json", () => {
  it("should be a valid JSON file", () => {
    "./data/synthTargets.json".should.be.a.jsonFile();
  });

  it("should adhere to the schema", () => {
    const ajv = new Ajv({ allErrors: true, strict: "log" });
    addFormats(ajv, ["date"]);

    const validate = ajv.compile(synthTargetsSchema);
    validate(synthTargets).should.be.true;
  });
});
