import { TokenTypes } from "../../../constants/zscriptSpec";
import zscriptModule from "../../../module/zscriptModule";
import { Token } from "../../tokenizer/types";
import TokenExecutor from "../tokenExecutor";
import { ASTNode } from "../types/nodeTypes";


export default abstract class Statement {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getStatement(): ASTNode;

  static getStatementImpl(lookahead: Token): Statement {
    switch (lookahead.type) {
      case TokenTypes.BOL_BHAI_TYPE:
        return zscriptModule.getPrintStatement();

      case TokenTypes.SEMI_COLON_TYPE:
        return zscriptModule.getEmptyStatement();

      case TokenTypes.OPEN_CURLY_BRACE_TYPE:
        return zscriptModule.getBlockStatement();

      case TokenTypes.BHAI_YE_HAI_TYPE:
        return zscriptModule.getVariableStatement();

      case TokenTypes.AGAR_BHAI:
        return zscriptModule.getIfStatement();

      case TokenTypes.JAB_TAK_BHAI:
        return zscriptModule.getWhileStatement();

      case TokenTypes.BAS_KAR_BHAI:
        return zscriptModule.getBreakStatement();
      
      case TokenTypes.AGLA_DEKH_BHAI:
        return zscriptModule.getContinueStatement();

      default:
        return zscriptModule.getExpressionStatement();
    }
  }
}
