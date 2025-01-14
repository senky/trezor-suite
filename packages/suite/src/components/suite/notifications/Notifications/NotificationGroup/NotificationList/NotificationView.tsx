import styled from 'styled-components';

import type { NotificationEntry } from '@suite-common/toast-notifications';
import { Button, Icon, ButtonProps, Paragraph, IconName } from '@trezor/components';

import { Translation, FormattedDateWithBullet } from 'src/components/suite';
import { getNotificationIcon } from 'src/utils/suite/notification';
import { useLayoutSize } from 'src/hooks/suite';
import type { ExtendedMessageDescriptor, ToastNotificationVariant } from 'src/types/suite';

const Opacity = styled.div<{ $seen?: boolean }>`
    opacity: ${({ $seen }) => ($seen ? 0.7 : 1)};
`;

const DateP = styled.div`
    display: flex;
    flex-direction: column;
    font-variant-numeric: tabular-nums;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    padding: 16px 0;

    & + & {
        border-top: 1px solid ${({ theme }) => theme.legacy.STROKE_GREY};
    }
`;

const Text = styled.div`
    flex: 1;
    padding: 0 16px;
    white-space: break-spaces;
`;

// eslint-disable-next-line local-rules/no-override-ds-component
const ActionButton = styled(Button)`
    min-width: 80px;
    align-self: center;
`;

const SeenWrapper = styled.span<{ $seen?: boolean }>`
    margin-bottom: 4px;
    opacity: ${({ $seen }) => ($seen ? 0.7 : 1)};
`;

export interface NotificationViewProps {
    notification: NotificationEntry;
    variant: ToastNotificationVariant;
    icon?: IconName | JSX.Element;
    message: ExtendedMessageDescriptor['id'];
    messageValues: ExtendedMessageDescriptor['values'];
    action?: {
        onClick: () => void;
        label: ExtendedMessageDescriptor['id'];
        position?: 'bottom' | 'right';
        variant?: ButtonProps['variant'];
    };
}

export const NotificationView = ({
    message,
    messageValues,
    action,
    icon,
    variant,
    notification: { seen, id },
}: NotificationViewProps) => {
    const { isMobileLayout } = useLayoutSize();

    const defaultIcon = icon ?? getNotificationIcon(variant);

    return (
        <Item>
            {defaultIcon && (
                <SeenWrapper $seen={seen}>
                    {typeof defaultIcon === 'string' ? (
                        <Icon size={20} name={defaultIcon} />
                    ) : (
                        defaultIcon
                    )}
                </SeenWrapper>
            )}
            <Text>
                <Opacity $seen={seen}>
                    <Paragraph typographyStyle={seen ? 'hint' : 'callout'}>
                        <Translation id={message} values={messageValues} />
                    </Paragraph>
                </Opacity>
                <Opacity $seen={seen}>
                    <DateP>
                        <Paragraph typographyStyle="label">
                            <FormattedDateWithBullet value={id} />
                        </Paragraph>
                    </DateP>
                </Opacity>
            </Text>

            {action?.onClick &&
                (isMobileLayout ? (
                    <Icon name="caretRight" onClick={action.onClick} size={18} />
                ) : (
                    <ActionButton variant="tertiary" size="tiny" onClick={action.onClick}>
                        <Translation id={action.label} />
                    </ActionButton>
                ))}
        </Item>
    );
};
