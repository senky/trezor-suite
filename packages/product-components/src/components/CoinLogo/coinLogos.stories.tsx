import styled from 'styled-components';
import { Meta, StoryObj } from '@storybook/react';

import { StoryColumn } from '@trezor/components';
import { NetworkSymbol } from '@suite-common/wallet-config';

import { CoinLogo } from '../../index';
import { COINS } from './coins';

const CoinName = styled.div`
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.legacy.TYPE_LIGHT_GREY};
`;

const WrapperIcons = styled.div`
    display: grid;
    width: 100%;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
`;

const Icon = styled.div`
    display: flex;
    min-height: 100px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const meta: Meta = {
    title: 'CoinLogos',
} as Meta;
export default meta;

export const All: StoryObj = {
    render: () => (
        <StoryColumn minWidth={700}>
            <WrapperIcons>
                {Object.keys(COINS).map(symbol => (
                    <Icon key={symbol}>
                        <CoinName>{symbol}</CoinName>
                        <CoinLogo
                            symbol={symbol as NetworkSymbol}
                            data-testid={`coin-${symbol}`}
                            size={64}
                        />
                    </Icon>
                ))}
            </WrapperIcons>
        </StoryColumn>
    ),
};
