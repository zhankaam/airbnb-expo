import { StyleProp, TextStyle } from 'react-native';

import { FieldError } from 'react-hook-form';

type StringValues = Record<
  'title' | 'submitButtonName' | 'footerButtonName' | 'footerTitle',
  string
>;
type StyleProps = Record<'buttonCustomStyles' | 'footerButtonStyles', StyleProp<TextStyle>>;

export type PropsType = StringValues &
  StyleProps & {
    onFooterTextPress(): void;
    onSubmit(): void;
    control: any; // @TODO
    errors: Record<string, FieldError>;
    watch: any;
  };
