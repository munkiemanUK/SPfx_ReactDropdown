import * as React from 'react';
import styles from './SpfXdropdown.module.scss';
import { ISpfXdropdownProps } from './ISpfXdropdownProps';
import { ComboBox, IComboBoxOption, IComboBox, PrimaryButton } from 'office-ui-fabric-react/lib/index';
import { Web } from "@pnp/sp/presets/all";
import { getGUID } from "@pnp/common";
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

var arr = [];
export interface IStates {
  SingleSelect: any;
  MultiSelect: any;
}

export default class SpfXdropdown extends React.Component<ISpfXdropdownProps, IStates> {
  constructor(props) {
    super(props);
    this.state = {
      SingleSelect: "",
      MultiSelect: []
    };
  }
  
  private async Save() {
    let web = Web(this.props.webURL);

    await web.lists.getByTitle("Audit Tool Data").items.add({
      Title: getGUID(),
      SingleValueComboBox: this.state.SingleSelect
      //MultiValueComboBox: { results: this.state.MultiSelect }
    }).then(i => {
      console.log(i);
    });
    alert("Submitted Successfully");
  }

  public onComboBoxChange = (ev: React.FormEvent<IComboBox>, option?: IComboBoxOption): void => {
    this.setState({ SingleSelect: option.key });
  }
  
  public render(): React.ReactElement<ISpfXdropdownProps> {
    return (
      <div>
        <h1>ComboBox Examples</h1>
        <ComboBox
          placeholder="Please Choose"
          selectedKey={this.state.SingleSelect}
          label="Single Select ComboBox"
          autoComplete="on"
          options={this.props.singleValueChoices}
          onChange={this.onComboBoxChange}
        />
        <div>
          <br />
          <br />
          <PrimaryButton onClick={() => this.Save()}>Submit</PrimaryButton>
        </div>
      </div>
    );
  }
}
