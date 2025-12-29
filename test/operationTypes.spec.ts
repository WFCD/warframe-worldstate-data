import * as chai from "chai";
import chaiJson from "chai-json";
import chaiJsonSchema from "chai-json-schema-ajv";

import operationTypes from "../data/operationTypes.json" with { type: "json" };

chai.use(chaiJson);
chai.use(chaiJsonSchema);

chai.should();

const operationTypesSchema = {
  definitions: {
    operationType: {
      type: "object",
      properties: {
        value: { type: "string" },
        symbol: { type: "string" },
      },
      required: ["value"],
    },
  },
  type: "object",
  patternProperties: {
    ".": { $ref: "#/definitions/operationType" },
  },
};

describe("operationTypes.json", () => {
  it("should be a valid JSON file", () => {
    "./data/operationTypes.json".should.be.a.jsonFile();
  });

  it("should adhere to the schema", () => {
    operationTypes.should.be.jsonSchema(operationTypesSchema);
  });
});
