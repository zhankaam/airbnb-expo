import {StyleSheet} from 'react-native';
import {COLORS} from '../../../app/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginLeft: 30,
        marginRight: 30,
    },
    section: {
        alignSelf: 'flex-start',
        marginLeft: 30,
    },
    icon: {
        marginBottom: 60,
    },
    title: {
        color: COLORS.BLACK,
        fontSize: 25,
    },
    input: {
        width: 300,
        margin: 10,
        padding: 20,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: COLORS.SECONDARY_GREY,
        fontSize: 16,
    },
    button: {
        width: 300,
        height: 60,
        borderRadius: 50,
        alignSelf: 'center'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '700',
    },
    footerText: {
        color: COLORS.GREY,
        fontSize: 16,
    },
    loginButton: {
        alignSelf: 'center',
    },
    loginButtonText: {
        fontSize: 20,
    }
});

export default styles;
