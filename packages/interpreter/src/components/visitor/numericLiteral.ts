import Visitor from ".";
import { ASTNode } from "zscript-parser";

export default class NumericLiteral implements Visitor {
  visitNode(node: ASTNode) {
    return node.value;
  }
}
