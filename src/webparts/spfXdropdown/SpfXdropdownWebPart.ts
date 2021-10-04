import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';

import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SpfXdropdownWebPartStrings';
import SpfXdropdown from './components/SpfXdropdown';
import { ISpfXdropdownProps } from './components/ISpfXdropdownProps';
import FabricUiComboBox from './components/SpfXdropdown';

// ****
import { IStackTokens, Stack } from 'office-ui-fabric-react/lib/Stack';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 }
};

// ** test options
const options: IDropdownOption[] = [  
  { key: 'apple', text: 'Apple' },
  { key: 'banana', text: 'Banana' },
  { key: 'orange', text: 'Orange'},
  { key: 'grape', text: 'Grape' },
  { key: 'broccoli', text: 'Broccoli' },
  { key: 'carrot', text: 'Carrot' },
  { key: 'lettuce', text: 'Lettuce' }
];

// ***

export interface ISpfXdropdownWebPartProps {
  description: string;
}

export const getChoiceFields = async (webURL,field) => {
  let resultarr = [];
  await fetch(`${webURL}/_api/web/lists/GetByTitle('Audit Tool Data')/fields?$filter=EntityPropertyName eq '${field}'`, {
      method: 'GET',
      mode: 'cors',
      credentials: 'same-origin',
      headers: new Headers({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-cache',
          'pragma': 'no-cache',
      }),
  }).then(async (response) => await response.json())
    .then(async (data) => {
      for (var i = 0; i < data.value[0].Choices.length; i++) {              
        resultarr.push({
          key:data.value[0].Choices[i],
          text:data.value[0].Choices[i]
        });
      }
    });
    return await resultarr;
};

export default class SpfXdropdownWebPart extends BaseClientSideWebPart<ISpfXdropdownWebPartProps> {

  public async render(): Promise<void> {
    const element: React.ReactElement<ISpfXdropdownProps> = React.createElement(
      SpfXdropdown,
      {
        description: this.properties.description,
        webURL:this.context.pageContext.web.absoluteUrl,
        singleValueChoices: await getChoiceFields(this.context.pageContext.web.absoluteUrl,'Medicals')
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
