import React from 'react';
import AuthenticationLayout from '../../shared/ui/authentication-layout';
import styles from './styled';

function Login() {
    return (
        <AuthenticationLayout
            title="Log in"
            submitButtonName="Log in"
            footerButtonName="Sign up"
            footerTitle="Do you need an account?"
            buttonCustomStyles={styles.button}
            footerButtonStyles={styles.footerButton}
        />
    );
}

export default Login;
