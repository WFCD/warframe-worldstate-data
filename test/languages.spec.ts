import * as chai from "chai";
import chaiJson from "chai-json";
import chaiJsonSchema from "chai-json-schema-ajv";

import languages from "../data/languages.json" with { type: "json" };

chai.use(chaiJson);
chai.use(chaiJsonSchema);

chai.should();
const { expect } = chai;

const syndicates = Object.keys(
  await import("../data/syndicatesData.json", { with: { type: "json" } }),
);

const languagesSchema = {
  definitions: {
    language: {
      type: "object",
      properties: {
        value: { type: "string" },
        desc: { type: "string" },
      },
      required: ["value"],
    },
  },
  type: "object",
  patternProperties: {},
};
languagesSchema.patternProperties[
  `^/ee|^/lotus|^/Lotus|${syndicates.join("|")}|^[0-9a-z]+$`
] = {
  $ref: "#/definitions/language",
};

describe("languages.json", () => {
  it("should be a valid JSON file", () => {
    expect("./data/languages.json").to.be.a.jsonFile();
  });

  it("should adhere to the schema", () => {
    expect(languages).to.be.jsonSchema(languagesSchema);
    expect(languages["/ee/types/engine/mover"]).to.eql({ value: "Mover" });
  });
});
