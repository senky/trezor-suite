import { useDispatch, useSelector } from 'react-redux';
import Animated, { SlideInDown } from 'react-native-reanimated';

import { CommonActions, useNavigation } from '@react-navigation/native';
import { isRejected } from '@reduxjs/toolkit';

import {
    AccountsRootState,
    selectAccountByKey,
    selectSendSignedTx,
} from '@suite-common/wallet-core';
import { AccountKey } from '@suite-common/wallet-types';
import { Button } from '@suite-native/atoms';
import { RootStackRoutes, AppTabsRoutes } from '@suite-native/navigation';
import { useToast } from '@suite-native/toasts';
import { Translation } from '@suite-native/intl';
import { prepareNativeStyle, useNativeStyles } from '@trezor/styles';
import { ConfirmOnTrezorImage } from '@suite-native/device';

import { sendTransactionAndCleanupSendFormThunk } from '../sendFormThunks';

const navigateToAccountDetail = ({ accountKey }: { accountKey: AccountKey }) =>
    // Reset navigation stack to the account detail screen with HomeStack as a previous step, so the user can navigate back there.
    CommonActions.reset({
        index: 1,
        routes: [
            {
                name: RootStackRoutes.AppTabs,
                params: {
                    screen: AppTabsRoutes.HomeStack,
                },
            },
            {
                name: RootStackRoutes.AccountDetail,
                params: {
                    accountKey,
                },
            },
        ],
    });

const footerStyle = prepareNativeStyle(utils => ({
    width: '100%',
    paddingHorizontal: utils.spacings.medium,
}));

export const OutputsReviewFooter = ({ accountKey }: { accountKey: AccountKey }) => {
    const dispatch = useDispatch();
    const { showToast } = useToast();
    const navigation = useNavigation();
    const { applyStyle } = useNativeStyles();

    const account = useSelector((state: AccountsRootState) =>
        selectAccountByKey(state, accountKey),
    );
    const signedTransaction = useSelector(selectSendSignedTx);

    {
        /* TODO: improve the illustration: https://github.com/trezor/trezor-suite/issues/13965 */
    }
    if (!signedTransaction || !account) return <ConfirmOnTrezorImage />;

    const handleSendTransaction = async () => {
        const sendResponse = await dispatch(
            sendTransactionAndCleanupSendFormThunk({ account, signedTransaction }),
        );

        if (isRejected(sendResponse)) {
            // TODO: set error state
        }

        showToast({ variant: 'success', message: 'Transaction sent', icon: 'check' });

        navigation.dispatch(navigateToAccountDetail({ accountKey }));
    };

    return (
        <Animated.View style={applyStyle(footerStyle)} entering={SlideInDown}>
            <Button
                accessibilityRole="button"
                accessibilityLabel="validate send form"
                testID="@send/send-transaction-button"
                onPress={handleSendTransaction}
            >
                <Translation id="moduleSend.review.outputs.submitButton" />
            </Button>
        </Animated.View>
    );
};