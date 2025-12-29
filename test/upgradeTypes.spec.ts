import * as chai from "chai";
import chaiJson from "chai-json";
import chaiJsonSchema from "chai-json-schema-ajv";

import upgradeTypes from "../data/upgradeTypes.json" with { type: "json" };

chai.use(chaiJson);
chai.use(chaiJsonSchema);

chai.should();

const upgradeTypesSchema = {
  type: "object",
  patternProperties: {
    "^GAMEPLAY_": {
      type: "object",
      properties: {
        value: { type: "string" },
      },
      required: ["value"],
    },
  },
};

describe("upgradeTypes.json", () => {
  it("should be a valid JSON file", () => {
    "./data/upgradeTypes.json".should.be.a.jsonFile();
  });

  it("should adhere to the schema", () => {
    upgradeTypes.should.be.jsonSchema(upgradeTypesSchema);
  });
});
