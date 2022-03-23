import { NodeType } from "../../../../constants/constants";
import zscriptModule from "../../../../module/zscriptModule";
import TokenExecutor from "../../tokenExecutor";
import { ASTNode } from "../../types/nodeTypes";


export default abstract class Expression {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getExpression(): ASTNode;

  static getExpressionImpl(expressionType: keyof typeof NodeType): Expression {
    switch (expressionType) {
      case NodeType.AdditiveExpression:
        return zscriptModule.getAdditiveExpression();

      case NodeType.MultiplicativeExpression:
        return zscriptModule.getMultiplicativeExpression();

      case NodeType.PrimaryExpression:
        return zscriptModule.getPrimaryExpression();

      case NodeType.ParanthesizedExpression:
        return zscriptModule.getParanthesizedExpression();

      case NodeType.AssignmentExpression:
        return zscriptModule.getAssignmentExpression();

      case NodeType.EqualityExpression:
        return zscriptModule.getEqualityExpression();

      case NodeType.LogicalANDExpression:
        return zscriptModule.getLogicalANDExpression();

      case NodeType.LogicalORExpression:
        return zscriptModule.getLogicalORExpression();

      case NodeType.RelationalExpression:
        return zscriptModule.getRelationalExpression();

      default:
        return zscriptModule.getIndentifierExpression();
    }
  }

  protected getBinaryExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string
  ) {
    return this._getExpression(downstreamExpressionType, operatorToken, NodeType.BinaryExpression);
  }

  protected getLogicalExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string
    ) {
    return this._getExpression(downstreamExpressionType, operatorToken, NodeType.LogicalExpression);
  }

  private _getExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string,
    expressionType: keyof typeof NodeType
    ) {
    let left = Expression.getExpressionImpl(downstreamExpressionType).getExpression();

    while (this._tokenExecutor.getLookahead()?.type === operatorToken) {
      const operator =
        this._tokenExecutor.eatTokenAndForwardLookahead(operatorToken);
      const right =
        Expression.getExpressionImpl(downstreamExpressionType).getExpression();

      left = {
        type: expressionType,
        operator: operator.value,
        left,
        right,
      };
    }

    return left;
  }

}
