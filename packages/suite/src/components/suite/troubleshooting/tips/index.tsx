import { isWeb, isDesktop, isLinux, isAndroid } from '@trezor/env-utils';
import { TREZOR_SUPPORT_DEVICE_URL } from '@trezor/urls';

import { TrezorLink } from 'src/components/suite';
import { Translation } from 'src/components/suite/Translation';

import { BridgeStatus, SuiteDesktopTip, BridgeToggle, Wrapper } from './BridgeTip';
import { UdevDescription } from './UdevDescription';

export const TROUBLESHOOTING_TIP_BRIDGE_STATUS = {
    key: 'bridge-status',
    heading: <Translation id="TR_TROUBLESHOOTING_TIP_BRIDGE_STATUS_TITLE" />,
    description: <BridgeStatus />,
    hide: !isWeb(),
};

export const TROUBLESHOOTING_TIP_WEBUSB_ENVIRONMENT = {
    key: 'webusb-environment',
    heading: <Translation id="TR_TROUBLESHOOTING_TIP_BROWSER_WEBUSB_TITLE" />,
    description: <Translation id="TR_TROUBLESHOOTING_TIP_BROWSER_WEBUSB_DESCRIPTION" />,
    hide: !isWeb(),
};

export const TROUBLESHOOTING_TIP_UNREADABLE_HID = {
    key: 'unreadable-hid',
    heading: <Translation id="TR_TROUBLESHOOTING_TIP_UNREADABLE_HID_TITLE" />,
    description: (
        <Wrapper>
            <Translation
                id="TR_TROUBLESHOOTING_TIP_UNREADABLE_HID_DESCRIPTION"
                values={{
                    a: chunks => (
                        <TrezorLink variant="underline" href={TREZOR_SUPPORT_DEVICE_URL}>
                            {chunks}
                        </TrezorLink>
                    ),
                }}
            />
        </Wrapper>
    ),
};

export const TROUBLESHOOTING_TIP_SUITE_DESKTOP = {
    key: 'suite-desktop',
    heading: <Translation id="TR_TROUBLESHOOTING_TIP_SUITE_DESKTOP_TITLE" />,
    description: <SuiteDesktopTip />,
    hide: !isWeb(),
};

export const TROUBLESHOOTING_TIP_SUITE_DESKTOP_TOGGLE_BRIDGE = {
    key: 'suite-desktop',
    heading: <Translation id="TR_TROUBLESHOOTING_TIP_SUITE_DESKTOP_TOGGLE_BRIDGE_TITLE" />,
    description: <BridgeToggle />,
    hide: isWeb() || isAndroid(),
};

export const TROUBLESHOOTING_TIP_CABLE = {
    key: 'cable',
    heading: <Translation id="TR_TROUBLESHOOTING_TIP_CABLE_TITLE" />,
    description: <Translation id="TR_TROUBLESHOOTING_TIP_CABLE_DESCRIPTION" />,
};

export const TROUBLESHOOTING_TIP_USB = {
    key: 'usbPort',
    heading: <Translation id="TR_TROUBLESHOOTING_TIP_USB_PORT_TITLE" />,
    description: <Translation id="TR_TROUBLESHOOTING_TIP_USB_PORT_DESCRIPTION" />,
    hide: isAndroid(),
};

export const TROUBLESHOOTING_TIP_DIFFERENT_COMPUTER = {
    key: 'differentComputer',
    heading: <Translation id="TR_TROUBLESHOOTING_TIP_COMPUTER_TITLE" />,
    description: <Translation id="TR_TROUBLESHOOTING_TIP_COMPUTER_DESCRIPTION" />,
};

export const TROUBLESHOOTING_TIP_RESTART_COMPUTER = {
    key: 'restartComputer',
    heading: <Translation id="TR_TROUBLESHOOTING_TIP_RESTART_COMPUTER_TITLE" />,
    description: <Translation id="TR_TROUBLESHOOTING_TIP_RESTART_COMPUTER_DESCRIPTION" />,
};

export const TROUBLESHOOTING_TIP_UDEV = {
    key: 'udev',
    heading: <Translation id="TR_UDEV_DOWNLOAD_TITLE" />,
    description: <UdevDescription />,
    hide: !isLinux(),
};

export const TROUBLESHOOTING_TIP_RECONNECT = {
    key: 'device-reconnect',
    heading: <Translation id="TR_RECONNECT_YOUR_DEVICE" />,
    description: (
        <Translation
            id={
                isDesktop()
                    ? 'TR_RECONNECT_DEVICE_DESCRIPTION_DESKTOP'
                    : 'TR_RECONNECT_DEVICE_DESCRIPTION'
            }
        />
    ),
};
