import styled from 'styled-components';

import { GradientOverlay, useElevation } from '@trezor/components';
import { borders, nextElevation, spacingsPx } from '@trezor/theme';

import type { AddressItem } from 'src/hooks/wallet/sign-verify/useSignAddressOptions';

// eslint-disable-next-line local-rules/no-override-ds-component
const StyledGradientOverlay = styled(GradientOverlay)`
    margin: -${spacingsPx.xs};
    border-radius: ${borders.radii.xxs};
`;

const DerivationPathColumn = styled.div`
    min-width: 36px;
    padding-right: ${spacingsPx.sm};
    opacity: 0.4;
`;

const AddressColumn = styled.div`
    position: relative;
    cursor: pointer;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 250px;
`;

interface HiddenAddressRowProps {
    item: AddressItem;
    isElevated?: boolean;
    className?: string;
}

export const HiddenAddressRow = ({
    item,
    isElevated = false,
    className,
}: HiddenAddressRowProps) => {
    const { elevation } = useElevation();

    const currentElevation = isElevated ? nextElevation[elevation] : elevation;

    const pathParts = item.value.split('/');

    return (
        <Wrapper className={`${className} react-select__single-value`}>
            <DerivationPathColumn>/{pathParts[pathParts.length - 1]}</DerivationPathColumn>

            <AddressColumn>
                <StyledGradientOverlay forcedElevation={currentElevation} hiddenFrom="160px" />
                {item.label}
            </AddressColumn>
        </Wrapper>
    );
};
