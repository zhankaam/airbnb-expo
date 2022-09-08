import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styled';

type ObjValueOfNumAndStr = Record<string, string | number>;

type PropsType = {
    text: string,
    buttonCustomStyles:  ObjValueOfNumAndStr | Array<ObjValueOfNumAndStr>,
    textCustomStyles: ObjValueOfNumAndStr,
    onClick(): void
}

const Button = ({ text = 'Button', buttonCustomStyles, textCustomStyles, onClick }: Partial<PropsType>) => {
    return (
        <TouchableOpacity style={[styles.button, buttonCustomStyles]} onPress={onClick}>
            <Text style={[styles.text, textCustomStyles]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;
