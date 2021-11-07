export enum groupType {
  ALL_VALUES = 'All Values',
  EXPLICIT_VLAUES = 'Explicit Values',
  RANGES = 'ranges',
}

export interface AllValuesExpression {
  attributeField: string;
  groupType: groupType;
}

export abstract class Facet {
  public attributeName: string;
  public groupType: groupType;
  public greaterQualifier: string;
  public lesserQualifier: string;

  constructor(
    groupType: groupType,
    attributeName: string,
    greaterQualifier?: string,
    lesserQualifier?: string
  ) {
    this.attributeName = attributeName;
    this.groupType = groupType;
    this.greaterQualifier = greaterQualifier;
    this.lesserQualifier = lesserQualifier;
  }
  abstract buildExpression(): Array<string>;

  public buildFacet(
    attribute: string,
    groupValue: groupType
  ): Array<AllValuesExpression> {
    let expression: AllValuesExpression[] = [
      { attributeField: attribute, groupType: groupValue },
    ];

    return expression;
  }
}
