import { should } from "chai";

import * as utilities from "../../tools/utilities";
import {
  fromNow,
  parseDate,
  timeDeltaToString,
  toNow,
} from "../../tools/utilities";

should();
describe("utilities", () => {
  it("timeDate functions exposed on defaults", () => {
    utilities.timeDeltaToString.should.exist;
    utilities.timeDeltaToString.should.be.a("function");

    utilities.fromNow.should.exist;
    utilities.fromNow.should.be.a("function");

    utilities.toNow.should.exist;
    utilities.toNow.should.be.a("function");

    utilities.parseDate.should.exist;
    utilities.parseDate.should.be.a("function");
  });
  it("timeDate functions exposed independently", () => {
    timeDeltaToString.should.exist;
    timeDeltaToString.should.be.a("function");

    fromNow.should.exist;
    fromNow.should.be.a("function");

    toNow.should.exist;
    toNow.should.be.a("function");

    parseDate.should.exist;
    parseDate.should.be.a("function");
  });
});
