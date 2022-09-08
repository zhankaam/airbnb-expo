import React from 'react';
import { StyleSheet } from 'react-native';
import {COLORS} from '../../app/colors';
import Form from '../../shared/ui/form';

const SignUp = () => {
    return (
        <Form
            title="Sign Up"
            submitButtonName="Sign up"
            footerButtonName="Log in"
            footerTitle="Already have an account?"
            buttonCustomStyles={styles.button}
            footerButtonStyles={styles.footerButton}
        />
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.SECONDARY_BLACK,
    },
    footerButton: {
        color: COLORS.LIGHT_RED,
    }
});

export default SignUp;
