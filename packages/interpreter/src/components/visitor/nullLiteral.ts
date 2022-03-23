import Visitor from ".";
import { ASTNode } from "zscript-parser";

export default class NullLiteral implements Visitor {
  visitNode(node: ASTNode) {
    return node.value;
  }
}
