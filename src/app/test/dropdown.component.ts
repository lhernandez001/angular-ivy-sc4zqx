import { Component } from '@angular/core';
import { groupType } from './facet';
import { AllValues } from './facet/allValues-facet';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropDownComponent {
  groupValues = ['All Values', 'Explicit Values', 'Ranges'];
  attributes = ['startTimeIso', 'speedTime', 'subscriberId', 'chargeNumber'];

  public attributeSelected = this.attributes[0];

  public selected = this.groupValues[0];

  public attributeField: string;
  public groupTypeValue: string;
  public allValues: AllValues;

  constructor() {
    this.attributeField = '';
    this.groupTypeValue = '';
  }

  public updateSelectedGroupValue(value) {
    this.selected = value.target.value;
    this.groupTypeValue = this.selected;
  }

  public updateAttributeSelected(field) {
    this.attributeSelected = field.target.value;
    this.attributeField = this.attributeSelected;
  }

  public buildAllValues() {
    this.allValues.buildFacet(this.attributeField, groupType.ALL_VALUES);
  }
}
