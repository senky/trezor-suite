import { MouseEvent } from 'react';

import styled, { useTheme } from 'styled-components';
import { transparentize } from 'polished';

import { borders, spacingsPx, typography } from '@trezor/theme';
import { Icon } from '@trezor/components';

import { Translation } from 'src/components/suite';
import { useGuideOpenNode } from 'src/hooks/guide';

const OpenGuideLink = styled.span`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: ${spacingsPx.xxs};
    padding: ${spacingsPx.xxxs} ${spacingsPx.xs};
    border-radius: ${borders.radii.sm};
    color: ${({ theme }) => theme.iconAlertYellow};
    ${typography.hint};
    overflow: visible;
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => transparentize(0.9, theme.backgroundAlertYellowBold)};
    }
`;

type OpenGuideFromTooltipProps = {
    id: string;
    'data-testid'?: string;
};

export const OpenGuideFromTooltip = ({
    id,
    'data-testid': dataTest,
}: OpenGuideFromTooltipProps) => {
    const { openNodeById } = useGuideOpenNode();
    const theme = useTheme();

    return (
        <OpenGuideLink
            data-testid={dataTest}
            onClick={(e: MouseEvent<any>) => {
                e.stopPropagation();
                openNodeById(id);
            }}
        >
            <Icon size={12} color={theme.iconAlertYellow} name="lightbulb" />
            <Translation id="TR_LEARN" />
        </OpenGuideLink>
    );
};
