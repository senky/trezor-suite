import { BuyTrade, ExchangeTrade, SellFiatTrade } from 'invity-api';
import {
    isCoinmarketBuyOffers,
    isCoinmarketSellOffers,
} from 'src/hooks/wallet/coinmarket/offers/useCoinmarketCommonOffers';
import {
    CoinmarketTradeBuySellType,
    CoinmarketTradeDetailType,
    CoinmarketTradeType,
} from 'src/types/coinmarket/coinmarket';
import { CoinmarketFormContextValues } from 'src/types/coinmarket/coinmarketForm';
import { CoinmarketOffersContextValues } from 'src/types/coinmarket/coinmarketOffers';

export const getCryptoQuoteAmountProps = (
    quoteInput: CoinmarketTradeDetailType | undefined,
    context: CoinmarketOffersContextValues<CoinmarketTradeType>,
) => {
    if (!quoteInput) return null;

    if (isCoinmarketBuyOffers(context)) {
        const amountInCrypto = context.quotesRequest?.wantCrypto;
        const quote = quoteInput as BuyTrade;

        if (!quote || !context.quotesRequest) return null;

        return {
            amountInCrypto,
            sendAmount: quote?.fiatStringAmount ?? '',
            sendCurrency: quote?.fiatCurrency,
            receiveAmount: quote?.receiveStringAmount ?? '',
            receiveCurrency: quote?.receiveCurrency,
        };
    }

    if (isCoinmarketSellOffers(context)) {
        const amountInCrypto = context.quotesRequest?.amountInCrypto;
        const quote = quoteInput as SellFiatTrade;

        if (!quote || !context.quotesRequest) return null;

        return {
            amountInCrypto,
            sendAmount: quote?.fiatStringAmount ?? '',
            sendCurrency: quote?.fiatCurrency,
            receiveAmount: quote?.cryptoStringAmount ?? '',
            receiveCurrency: quote?.cryptoCurrency,
        };
    }

    const quote = quoteInput as ExchangeTrade;

    return {
        amountInCrypto: false,
        sendAmount: quote?.sendStringAmount ?? '',
        sendCurrency: quote?.send,
        receiveAmount: quote?.receiveStringAmount ?? '',
        receiveCurrency: quote?.receive,
    };
};

export const getProvidersInfoProps = (
    context:
        | CoinmarketOffersContextValues<CoinmarketTradeType>
        | CoinmarketFormContextValues<CoinmarketTradeType>,
) => {
    if (isCoinmarketBuyOffers(context)) {
        return {
            providers: context.buyInfo?.providerInfos,
        };
    } else if (isCoinmarketSellOffers(context)) {
        return {
            providers: context.sellInfo?.providerInfos,
        };
    }

    return {
        providers: context.exchangeInfo?.providerInfos,
    };
};

export const getFiatCurrenciesProps = (
    context: CoinmarketFormContextValues<CoinmarketTradeBuySellType>,
) => {
    if (isCoinmarketSellOffers(context)) {
        return {
            supportedFiatCurrencies: context.sellInfo?.supportedFiatCurrencies,
        };
    }

    return {
        supportedFiatCurrencies: context.buyInfo?.supportedFiatCurrencies,
        defaultAmountsOfFiatCurrencies: context.buyInfo?.buyInfo.defaultAmountsOfFiatCurrencies,
    };
};
