import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({ iconUrl, dimension, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handleNavigate}>
      <Image
        source={iconUrl}
        resizeMode="center"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn