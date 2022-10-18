import { StyleProp, TextStyle } from 'react-native';

type StringValues = Record<
  'title' | 'submitButtonName' | 'footerButtonName' | 'footerTitle',
  string
>;
type StyleProps = Record<'buttonCustomStyles' | 'footerButtonStyles', StyleProp<TextStyle>>;

export type PropsType = StringValues &
  StyleProps & {
    onFooterTextPress(): void;
    onEmailChangeHandler(text: string): void;
    onPasswordChangeHandler(text: string): void;
    onNameChangeHandler(text: string): void;
    onConfirmationPasswordChangeHandler(text: string): void;
    onPhoneNumberChangeHandler(text: string): void;
    onSubmit(): void;
    control: any; // @TODO
  };
