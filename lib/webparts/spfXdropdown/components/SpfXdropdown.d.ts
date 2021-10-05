import * as React from 'react';
import { ISpfXdropdownProps } from './ISpfXdropdownProps';
import { IComboBoxOption, IComboBox } from 'office-ui-fabric-react/lib/index';
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
export interface IStates {
    medicalSelect: any;
    assessmentSelect: any;
}
export default class SpfXdropdown extends React.Component<ISpfXdropdownProps, IStates> {
    constructor(props: any);
    private Save;
    onMedicalChange: (ev: React.FormEvent<IComboBox>, option?: IComboBoxOption) => void;
    onAssessmentChange: (ev: React.FormEvent<IComboBox>, option?: IComboBoxOption) => void;
    render(): React.ReactElement<ISpfXdropdownProps>;
}
//# sourceMappingURL=SpfXdropdown.d.ts.map