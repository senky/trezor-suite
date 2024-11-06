import styled from 'styled-components';

import { Card, Button } from '@trezor/components';
import { typography } from '@trezor/theme';

import { useSelector } from 'src/hooks/suite/useSelector';
import { selectCurrentCoinjoinWheelStates } from 'src/reducers/wallet/coinjoinReducer';
import { Translation } from 'src/components/suite';
import { useDispatch } from 'src/hooks/suite';
import { stopCoinjoinSession } from 'src/actions/wallet/coinjoinClientActions';

import { CoinjoinStatusMessage } from './CoinjoinStatusMessage';
import { CoinjoinProgressWheel } from './CoinjoinProgressWheel';

// eslint-disable-next-line local-rules/no-override-ds-component
const Container = styled(Card)<{ $isWide?: boolean }>`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: ${({ $isWide }) => ($isWide ? '240px' : '180px')};
    height: 100%;
    padding: 10px;
    color: ${({ theme }) => theme.textSubdued};
    ${typography.callout}
    text-align: center;
`;

// eslint-disable-next-line local-rules/no-override-ds-component
const StopButton = styled(Button)`
    /* 23px button height + 7 margin = 30 height of StatusMessage */
    margin-top: 7px;
    background: none;

    path {
        fill: ${({ theme }) => theme.legacy.TYPE_LIGHT_GREY};
    }
`;

interface CoinjoinStatusWheelProps {
    accountKey: string;
}

export const CoinjoinStatusWheel = ({ accountKey }: CoinjoinStatusWheelProps) => {
    const { isSessionActive, isResumeBlockedByLastingIssue, isPaused, isLoading } = useSelector(
        selectCurrentCoinjoinWheelStates,
    );

    const dispatch = useDispatch();

    return (
        <Container $isWide={isSessionActive}>
            <CoinjoinProgressWheel accountKey={accountKey} />

            {isSessionActive && !isResumeBlockedByLastingIssue && (
                <CoinjoinStatusMessage accountKey={accountKey} />
            )}

            {isPaused && !isLoading && (
                <StopButton
                    variant="tertiary"
                    icon="stop"
                    iconAlignment="right"
                    iconSize={10}
                    onClick={() => dispatch(stopCoinjoinSession(accountKey))}
                >
                    <Translation id="TR_STOP" />
                </StopButton>
            )}
        </Container>
    );
};
