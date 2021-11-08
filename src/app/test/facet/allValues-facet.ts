import { group } from '@angular/animations';
import { Facet, groupType } from '../facet';

export interface AllValuesExpression {
  attributeField: string;
  groupType: groupType;
}

export class AllValues extends Facet {
  public attribute: string;
  constructor(attribute: string) {
    super(groupType.ALL_VALUES, attribute);
    this.attribute = attribute;
  }

  public buildExpression(): Array<string> {
    return null;
  }

  public buildFacet(
    attribute: string,
    groupValue: groupType
  ): Array<AllValuesExpression> {
    let expression: AllValuesExpression[] = [
      { attributeField: attribute, groupType: groupValue },
    ];
    console.log('Expr: ', expression);
    return expression;
  }
}
