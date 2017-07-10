import { Component } from '@angular/core';

import { PropertyTypeComponent } from 'angularm';

@Component({
    selector: 'div [mgFormLine]',
    template:
        `
        <input [ngClass]="'w3-input'"
          type="{{configuration.inputType}}"
          id="{{propertyType.entityType.singular}}_{{propertyType.name}}"
          placeholder="{{propertyType.name | titleCase}}"
          [formControl]="mgFormControl">
         
         <label for="{{propertyType.entityType.singular}}_{{propertyType.name}}"
            >{{propertyType.name | titleCase}}</label> 
        <br>`,
})
export class DiogoFormLineComponent extends PropertyTypeComponent { }
