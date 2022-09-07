import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type ObjValueOfNumAndStr = Record<string, string | number>;

type PropsType = {
    text: string,
    buttonCustomStyles:  ObjValueOfNumAndStr | Array<ObjValueOfNumAndStr>,
    textCustomStyles: ObjValueOfNumAndStr,
    onClick(): void
}

const Button = ({ text = 'Button', buttonCustomStyles, textCustomStyles, onClick }: PropsType) => {
    return (
        <TouchableOpacity style={[styles.button, buttonCustomStyles]} onPress={onClick}>
            <Text
                style={[styles.text, textCustomStyles]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 200,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: '500',
        padding: 3
    },
});

export default Button;
