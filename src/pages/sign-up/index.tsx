import React from 'react';
import AuthenticationLayout from '../../shared/ui/authentication-layout';
import styles from './styled';

const SignUp = () => {
    return (
        <AuthenticationLayout
            title="Sign Up"
            submitButtonName="Sign up"
            footerButtonName="Log in"
            footerTitle="Already have an account?"
            buttonCustomStyles={styles.button}
            footerButtonStyles={styles.footerButton}
        />
    );
};

export default SignUp;
