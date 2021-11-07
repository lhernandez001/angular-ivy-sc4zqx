import { group } from '@angular/animations';
import { Facet, groupType } from '../facet';

export class AllValues extends Facet {
  public attribute: string;
  constructor(attribute: string) {
    super(groupType.ALL_VALUES, attribute);
    this.attribute = attribute;
  }

  public buildExpression(): Array<string> {
    return null;
  }
}
