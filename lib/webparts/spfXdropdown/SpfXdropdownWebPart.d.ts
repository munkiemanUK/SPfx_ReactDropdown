import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface ISpfXdropdownWebPartProps {
    description: string;
}
export declare const getChoiceFields: (webURL: any, field: any) => Promise<any[]>;
export default class SpfXdropdownWebPart extends BaseClientSideWebPart<ISpfXdropdownWebPartProps> {
    render(): Promise<void>;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=SpfXdropdownWebPart.d.ts.map