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
import { Guid } from '@microsoft/sp-core-library';

var arr = [];
export interface IStates {
  medicalSelect: any;
  assessmentSelect: any;
}

export default class SpfXdropdown extends React.Component<ISpfXdropdownProps, IStates> {
  constructor(props) {
    super(props);
    this.state = {
      medicalSelect: "",
      assessmentSelect: ""
    };
  }
  
  private async Save() {
    let web = Web(this.props.webURL);
    //alert('saving '+this.state.medicalSelect);
    //sp.web.lists.getByTitle("Audit Tool Data").items.add({
    //  Medical: this.state.medicalSelect
    //});
    await web.lists.getByTitle("Audit Tool Data").items.add({
      Title: getGUID(),
      Medicals: this.state.medicalSelect,
      Assessment: this.state.assessmentSelect
      //MultiValueComboBox: { results: this.state.assessmentSelect }
    });
    //.then(i => {
    //  console.log(i);
    //});
    alert("Submitted Successfully");
  }

  public onMedicalChange = (ev: React.FormEvent<IComboBox>, option?: IComboBoxOption): void => {
    this.setState({ medicalSelect: option.key });
  }

  public onAssessmentChange = (ev: React.FormEvent<IComboBox>, option?: IComboBoxOption): void => {
    this.setState({ assessmentSelect: option.key });
  }

  public render(): React.ReactElement<ISpfXdropdownProps> {
    return (
      <div>
        <h1>ComboBox Examples</h1>
        <div>
        <ComboBox
          placeholder="Please Choose"
          selectedKey={this.state.medicalSelect}
          label="Medicals"
          autoComplete="on"
          options={this.props.medicalChoices}
          onChange={this.onMedicalChange}
        />
        <ComboBox
          placeholder="Please Choose"
          selectedKey={this.state.assessmentSelect}
          label="Assessment"
          autoComplete="on"
          options={this.props.assessmentChoices}
          onChange={this.onAssessmentChange}
        />
        </div>
        <div>
          <br />
          <br />
          <PrimaryButton onClick={() => this.Save()}>Submit</PrimaryButton>
        </div>
      </div>
    );
  }
}
