import Visitor from ".";
import { ASTNode } from "zscript-parser";

export default class EmptyStatement implements Visitor {
  visitNode(_: ASTNode) {
    return;
  }
}
