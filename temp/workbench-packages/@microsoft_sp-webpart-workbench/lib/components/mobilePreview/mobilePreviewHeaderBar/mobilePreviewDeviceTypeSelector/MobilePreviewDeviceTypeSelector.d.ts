import * as React from 'react';
import { DeviceType } from '../../mobilePreview/MobilePreview';
export interface IMobilePreviewDeviceTypeSelectorProps {
    onChangeDeviceType: (type: DeviceType) => void;
}
export default class MobilePreviewDeviceTypeSelector extends React.Component<IMobilePreviewDeviceTypeSelectorProps, {}> {
    render(): React.ReactElement<{}>;
    private _handleDeviceChangePhone;
    private _handleDeviceChangeTablet;
}
//# sourceMappingURL=MobilePreviewDeviceTypeSelector.d.ts.map