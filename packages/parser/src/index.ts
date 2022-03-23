import zscriptModule from "./module/zscriptModule";

export { NodeType } from "./constants/constants";
export type { ASTNode } from "./components/parser/types/nodeTypes";
export default zscriptModule.getParser();
