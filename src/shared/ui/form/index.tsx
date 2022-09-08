import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {BriefCaseIcon} from '../../icons';
import {COLORS} from '../../../app/colors';
import Input from '../input';
import CustomButton from '../button';

import styles from './styled';

type PropsType = Record<
    'title' |
    'submitButtonName' |
    'footerButtonName' |
    'footerTitle', string> & {
    buttonCustomStyles: Record<string, string | number>,
    footerButtonStyles: Record<string, string | number>
}

const Form = ({
    title,
    submitButtonName,
    footerButtonName,
    footerTitle,
    buttonCustomStyles,
    footerButtonStyles,
}: PropsType) => {
    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <BriefCaseIcon
                    style={styles.icon}
                    name="briefcase"
                    size={64}
                    color={COLORS.LIGHT_RED} />
                <Text style={styles.title}>{title}</Text>
            </View>
            <View>
                <Input
                    placeholder="Email"
                    style={styles.input}
                    onTextChange={(text) => console.log(text)}
                />
                <Input
                    placeholder="Password"
                    style={styles.input}
                    secureTextEntry
                    onTextChange={(text) => console.log(text)}
                />
            </View>
            <CustomButton
                text={`${submitButtonName} (skip)`}
                buttonCustomStyles={[styles.button, buttonCustomStyles]}
                textCustomStyles={styles.buttonText}
                onClick={() => { alert('Clicked!'); }}
            />
            <View>
                <Text style={styles.footerText}>{footerTitle}</Text>
                <Pressable
                    style={[styles.loginButton, footerButtonStyles]}
                    // onPress={() => console.log('pressed')}
                >
                    <Text style={styles.loginButtonText}>{footerButtonName}</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Form;
