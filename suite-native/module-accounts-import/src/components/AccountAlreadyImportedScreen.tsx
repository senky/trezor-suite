import { useNavigation } from '@react-navigation/core';

import { Button, Card, VStack } from '@suite-native/atoms';
import { AccountsListItem } from '@suite-native/accounts';
import { Account } from '@suite-common/wallet-types';
import { Translation } from '@suite-native/intl';
import {
    AccountsImportStackParamList,
    AccountsImportStackRoutes,
    AppTabsRoutes,
    HomeStackRoutes,
    RootStackParamList,
    RootStackRoutes,
    StackToTabCompositeProps,
} from '@suite-native/navigation';
import { prepareNativeStyle, useNativeStyles } from '@trezor/styles';

import { AccountImportSummaryScreen } from './AccountImportSummaryScreen';

type AccountAlreadyImportedScreenProps = {
    account: Account;
};

const contentWrapperStyle = prepareNativeStyle(() => ({
    marginBottom: 114,
}));

// TODO We shouldn't add navigation props to components like this.
// Navigation hook should be typed properly to handle this.
type NavigationProp = StackToTabCompositeProps<
    AccountsImportStackParamList,
    AccountsImportStackRoutes.AccountImportSummary,
    RootStackParamList
>;

export const AccountAlreadyImportedScreen = ({ account }: AccountAlreadyImportedScreenProps) => {
    const { applyStyle } = useNativeStyles();
    const navigation = useNavigation<NavigationProp>();

    const handleImportAnotherAsset = () =>
        navigation.navigate(RootStackRoutes.AccountsImport, {
            screen: AccountsImportStackRoutes.XpubScan,
            params: {
                networkSymbol: account.symbol,
            },
        });

    const handleNavigateToDashboard = () =>
        navigation.navigate(RootStackRoutes.AppTabs, {
            screen: AppTabsRoutes.HomeStack,
            params: {
                screen: HomeStackRoutes.Home,
            },
        });

    return (
        <AccountImportSummaryScreen
            title={<Translation id="moduleAccountImport.summaryScreen.title.alreadySynced" />}
            subtitle={<Translation id="moduleAccountImport.summaryScreen.subtitle" />}
            footer={
                <VStack spacing="sp16">
                    <Button
                        size="large"
                        colorScheme="tertiaryElevation0"
                        onPress={handleImportAnotherAsset}
                    >
                        <Translation id="moduleAccountImport.summaryScreen.button.importAnotherAsset" />
                    </Button>
                    <Button size="large" onPress={handleNavigateToDashboard}>
                        <Translation id="moduleAccountImport.summaryScreen.button.continueToApp" />
                    </Button>
                </VStack>
            }
            testID="@account-import/summary/account-already-imported"
        >
            <Card style={applyStyle(contentWrapperStyle)}>
                {account && <AccountsListItem account={account} />}
            </Card>
        </AccountImportSummaryScreen>
    );
};