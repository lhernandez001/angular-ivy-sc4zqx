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

  public elements: Array<string>;
  public attributeSelected = this.attributes[0];

  public selected = this.groupValues[0];

  public attributeField: string;
  public groupTypeValue: string;
  public isNewFacet: boolean;
  public allValues: AllValues;

  constructor() {
    this.attributeField = '';
    this.groupTypeValue = '';
    this.isNewFacet = false;
    this.elements = new Array<string>();
    this.setDefaultAttribute();
  }

  public setDefaultAttribute() {
    let baseAttribute = this.attributeField;
    return baseAttribute;
  }

  public addFacet() {
    this.isNewFacet = true;
    console.log('NEW FACET');
    this.isNewFacet = false;
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
