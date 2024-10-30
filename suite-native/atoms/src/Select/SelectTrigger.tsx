import { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';

import { Icon } from '@suite-native/icons';
import { prepareNativeStyle, useNativeStyles } from '@trezor/styles';

import { Box } from '../Box';
import { ACCESSIBILITY_FONTSIZE_MULTIPLIER, Text } from '../Text';

type SelectTriggerProps = {
    value: string | null;
    label: ReactNode;
    icon?: ReactNode;
    handlePress: () => void;
};

const SELECT_HEIGHT = 58 * ACCESSIBILITY_FONTSIZE_MULTIPLIER;

const selectStyle = prepareNativeStyle(utils => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: utils.colors.backgroundNeutralSubtleOnElevation1,
    borderWidth: utils.borders.widths.small,
    borderRadius: utils.borders.radii.r8,
    borderColor: utils.colors.backgroundNeutralSubtleOnElevation1,
    color: utils.colors.textSubdued,
    paddingLeft: utils.spacings.sp12,
    paddingRight: 23.25,
    height: SELECT_HEIGHT,
}));

const iconWrapperStyle = prepareNativeStyle(() => ({ marginRight: 1 }));

export const SelectTrigger = ({ value, label, icon, handlePress }: SelectTriggerProps) => {
    const { applyStyle } = useNativeStyles();

    return (
        <TouchableOpacity onPress={handlePress} style={applyStyle(selectStyle)}>
            <Box>
                {!!value && (
                    <Text variant="label" color="textSubdued">
                        {label}
                    </Text>
                )}
                <Box flexDirection="row" alignItems="center">
                    <Text numberOfLines={1}>
                        {icon && <Box style={applyStyle(iconWrapperStyle)}>{icon}</Box>}
                        <Text numberOfLines={1} ellipsizeMode="tail">
                            {value}
                        </Text>
                    </Text>
                </Box>
            </Box>
            <Icon size="large" color="iconSubdued" name="caretDown" />
        </TouchableOpacity>
    );
};
