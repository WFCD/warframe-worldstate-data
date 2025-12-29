import * as chai from "chai";
import chaiJson from "chai-json";
import chaiJsonSchema from "chai-json-schema-ajv";

import eventsData from "../data/eventsData.json" with { type: "json" };

chai.use(chaiJson);
chai.use(chaiJsonSchema);

chai.should();

const eventsDataSchema = {
  definitions: {
    tag: {
      type: "object",
      properties: {
        value: { type: "string" },
      },
      required: ["value"],
    },
  },
  type: "object",
  properties: {
    tags: {
      type: "object",
      patternProperties: {
        Event: { $ref: "#/definitions/tag" },
      },
    },
    scoreVariables: {
      type: "object",
      patternProperties: {
        Event: {
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {
                value: { type: "string" },
              },
              required: ["value"],
            },
          },
          required: ["value"],
        },
      },
    },
    scoreMaxTags: {
      type: "object",
      patternProperties: {
        Event: {
          type: "object",
          properties: {
            value: {
              type: "object",
              properties: {
                value: { type: "string" },
              },
              required: ["value"],
            },
          },
          required: ["value"],
        },
      },
    },
  },
};

describe("eventsData.json", () => {
  it("should be a valid JSON file", () => {
    "./data/eventsData.json".should.be.a.jsonFile();
  });

  it("should adhere to the schema", () => {
    eventsData.should.be.jsonSchema(eventsDataSchema);
  });
});
