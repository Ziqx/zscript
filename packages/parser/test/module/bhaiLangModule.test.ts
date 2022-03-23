import { Parser } from "../../src/components/parser";
import Program from "../../src/components/parser/program";
import TokenExecutor from "../../src/components/parser/tokenExecutor";
import Tokenizer from "../../src/components/tokenizer";
import zscriptModule from "../../src/module/zscriptModule";

test("test zscriptModule should success", () => {
  expect(zscriptModule.getTokenizer()).toBeInstanceOf(Tokenizer);
  expect(zscriptModule.getTokenExecutor()).toBeInstanceOf(TokenExecutor);
  expect(zscriptModule.getProgram()).toBeInstanceOf(Program);
  expect(zscriptModule.getParser()).toBeInstanceOf(Parser);
});
