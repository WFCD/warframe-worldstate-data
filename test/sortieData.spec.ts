import * as chai from "chai";
import chaiJson from "chai-json";
import chaiJsonSchema from "chai-json-schema-ajv";

import sortieData from "../data/sortieData.json" with { type: "json" };

chai.use(chaiJson);
chai.use(chaiJsonSchema);

chai.should();

const sortieDataSchema = {
  definitions: {
    boss: {
      type: "object",
      properties: {
        name: { type: "string" },
        faction: {
          type: "string",
          enum: ["Corpus", "Corrupted", "Grineer", "Infestation", "Narmer"],
        },
      },
      required: ["name", "faction"],
    },
    region: {
      type: "object",
      properties: {
        name: { type: "string" },
        missions: {
          type: "array",
          items: {
            type: "string",
            enum: [
              "Assassination",
              "Defense",
              "Excavation",
              "Exterminate",
              "Hijack",
              "Hive",
              "Interception",
              "Mobile Defense",
              "Rescue",
              "Sabotage",
              "Spy",
              "Survival",
            ],
          },
        },
      },
      required: ["name", "missions"],
    },
    endState: {
      type: "object",
      properties: {
        bossName: { type: "string" },
        regions: {
          type: "array",
          items: { $ref: "#/definitions/region" },
        },
      },
      required: ["bossName", "regions"],
    },
  },
  type: "object",
  properties: {
    modifierTypes: {
      type: "object",
      patternProperties: {
        "^SORTIE_MODIFIER_": { type: "string" },
      },
    },
    modifierDescriptions: {
      type: "object",
      patternProperties: {
        "^SORTIE_MODIFIER_": { type: "string" },
      },
    },
    bosses: {
      type: "object",
      patternProperties: {
        "^SORTIE_BOSS_": {
          $ref: "#/definitions/boss",
        },
      },
    },
    endStates: {
      type: "array",
      items: { $ref: "#/definitions/endState" },
    },
    modifiers: {
      type: "array",
      items: { type: "string" },
    },
  },
};

describe("sortieData.json", () => {
  it("should be a valid JSON file", () => {
    "./data/sortieData.json".should.be.a.jsonFile();
  });

  it("should adhere to the schema", () => {
    sortieData.should.be.jsonSchema(sortieDataSchema);
  });
});
