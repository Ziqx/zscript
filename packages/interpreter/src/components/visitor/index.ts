import { ASTNode } from "zscript-parser";

export default interface Visitor {
  visitNode(node: ASTNode): unknown;
}
