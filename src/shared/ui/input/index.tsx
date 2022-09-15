import React from 'react'
import { TextInput } from 'react-native'

import { COLORS } from '../../../app/colors'

type PropsType = {
  style: Record<string, string | number>
  placeholder: string
  secureTextEntry: boolean
  placeholderTextColor: string
  onTextChange(text: string): void
}

const Input = ({
  style,
  onTextChange,
  placeholderTextColor = COLORS.BLACK,
  ...props
}: Partial<PropsType>) => {
  const [text, setText] = React.useState('')

  const onChangeText = (text: string) => {
    setText(text)
    onTextChange && onTextChange(text)
  }

  return <TextInput {...props} style={style} onChangeText={onChangeText} value={text} />
}

export default Input
