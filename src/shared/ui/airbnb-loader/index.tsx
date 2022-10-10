import React from 'react';

import { MotiView } from 'moti';
import { COLORS } from 'src/app/colors';
import { FontAwesome5Icon } from 'src/shared/icons';
import { styles } from 'src/shared/ui/airbnb-loader/styles';

const AirbnbLoader = () => (
  <MotiView
    from={{
      rotateY: '0deg',
      opacity: 0,
      scale: 0.9,
    }}
    animate={{
      rotateY: '-180deg',
      opacity: 1,
      scale: 1,
    }}
    transition={{
      loop: true,
      type: 'timing',
      duration: 800,
      delay: 300,
    }}
    style={styles.loader}>
    <FontAwesome5Icon size={80} color={COLORS.SECONDARY_RED} name="airbnb" />
  </MotiView>
);

export default AirbnbLoader;
