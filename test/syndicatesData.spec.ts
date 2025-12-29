import * as chai from "chai";
import chaiJson from "chai-json";
import chaiJsonSchema from "chai-json-schema-ajv";

import syndicatesData from "../data/syndicatesData.json" with { type: "json" };

chai.use(chaiJson);
chai.use(chaiJsonSchema);

chai.should();

const syndicatesDataSchema = {
  type: "object",
  patternProperties: {
    Syndicate$: {
      type: "object",
      properties: {
        name: { type: "string" },
      },
      required: ["name"],
    },
  },
};

describe("syndicatesData.json", () => {
  it("should be a valid JSON file", () => {
    "./data/syndicatesData.json".should.be.a.jsonFile();
  });

  it("should adhere to the schema", () => {
    syndicatesData.should.be.jsonSchema(syndicatesDataSchema);
  });
});
