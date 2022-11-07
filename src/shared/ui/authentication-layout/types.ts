import { StyleProp, TextStyle } from 'react-native';

import { Control, FieldError } from 'react-hook-form';
import { FormDataType } from 'src/services/http/auth';

type StringValues = Record<
  'title' | 'submitButtonName' | 'footerButtonName' | 'footerTitle',
  string
>;
type StyleProps = Record<'buttonCustomStyles' | 'footerButtonStyles', StyleProp<TextStyle>>;

export type PropsType = StringValues &
  StyleProps & {
    onFooterTextPress(): void;
    onSubmit(): void;
    control: Control<FormDataType> | Control<Pick<FormDataType, 'email' | 'password'>>;
    errors: Record<string, FieldError>;
    watch: (value: string) => string;
  };
