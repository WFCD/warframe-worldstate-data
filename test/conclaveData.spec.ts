import * as chai from "chai";
import chaiJson from "chai-json";
import chaiJsonSchema from "chai-json-schema-ajv";

import conclaveData from "../data/conclaveData.json" with { type: "json" };

chai.use(chaiJson);
chai.use(chaiJsonSchema);

chai.should();

const conclaveDataSchema = {
  definitions: {
    mode: {
      type: "object",
      properties: {
        value: { type: "string" },
      },
    },
    category: {
      type: "object",
      properties: {
        value: { type: "string" },
        description: { type: "string" },
      },
    },
    challenges: {
      type: "object",
      properties: {
        title: { type: "string" },
        description: { type: "string" },
        standing: { type: "number" },
      },
    },
    affectors: {
      type: "object",
      properties: {
        title: { type: "string" },
        description: { type: "string" },
      },
    },
  },
  type: "object",
  properties: {
    modes: {
      type: "object",
      patternProperties: {
        "^PVPMODE_": { $ref: "#/definitions/mode" },
      },
    },
    categories: {
      type: "object",
      patternProperties: {
        "^PVPChallengeTypeCategory_": { $ref: "#/definitions/category" },
      },
    },
    challenges: {
      type: "object",
      patternProperties: {
        "^PVPTimedChallenge": { $ref: "#/definitions/challenges" },
      },
    },
    affectors: {
      type: "object",
      patternProperties: {
        "^PVPTimedAffector": { $ref: "#/definitions/affectors" },
      },
    },
  },
  required: ["modes", "categories", "challenges"],
};

describe("conclaveData.json", () => {
  it("should be a valid JSON file", () => {
    "./data/conclaveData.json".should.be.a.jsonFile();
  });

  it("should adhere to the schema", () => {
    conclaveData.should.be.jsonSchema(conclaveDataSchema);
  });
});
