import { useState } from 'react';

export const useTogglePasswordVisibility = () => {
  const [isPasswordVisibility, setIsPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-slash');
      setIsPasswordVisibility(!isPasswordVisibility);
    } else if (rightIcon === 'eye-slash') {
      setRightIcon('eye');
      setIsPasswordVisibility(!isPasswordVisibility);
    }
  };

  return {
    isPasswordVisibility,
    rightIcon,
    handlePasswordVisibility,
  };
};
