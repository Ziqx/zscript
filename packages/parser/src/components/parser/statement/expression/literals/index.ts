import { TokenTypes } from "../../../../../constants/zscriptSpec";
import UnsupportedTypeException from "../../../../../exceptions/unsupportedTypeException";
import zscriptModule from "../../../../../module/zscriptModule";
import TokenExecutor from "../../../tokenExecutor";
import { ASTNode } from "../../../types/nodeTypes";

export default abstract class Literal {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getLiteral(): ASTNode;

  static getLiteralImpl(tokenType?: string): Literal {
    switch (tokenType) {
      case TokenTypes.NUMBER_TYPE:
        return zscriptModule.getNumericLiteral();

      case TokenTypes.BOOLEAN_TYPE:
        return zscriptModule.getBooleanLiteral();

      case TokenTypes.STRING_TYPE:
        return zscriptModule.getStringLiteral();

      case TokenTypes.NALLA_TYPE:
        return zscriptModule.getNullLiteral();

      default:
        throw new UnsupportedTypeException(
          `Token type not supproted for literal: ${tokenType}`
        );
    }
  }
}
