import { ReactNode } from 'react';

import { ButtonProps, Tooltip, NewModal } from '@trezor/components';
import { Network } from '@suite-common/wallet-config';

import { Translation } from 'src/components/suite';

interface AddButtonProps extends Omit<ButtonProps, 'children'> {
    disabledMessage: ReactNode;
    networkName: Network['name'];
}

export const AddButton = ({ disabledMessage, networkName, ...buttonProps }: AddButtonProps) => (
    <Tooltip maxWidth={285} content={disabledMessage}>
        <NewModal.Button isDisabled={!!disabledMessage} data-testid="@add-account" {...buttonProps}>
            <Translation id="TR_ADD_NETWORK_ACCOUNT" values={{ network: networkName }} />
        </NewModal.Button>
    </Tooltip>
);
