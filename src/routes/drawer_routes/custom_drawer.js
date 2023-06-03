import { View, Text, StyleSheet, Image, Touchable } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

import XIcon from '../../../assets/x.png'
import SetIcon from '../../../assets/set.png'
import AccIcon from '../../../assets/acc.png'
import ExitIcon from '../../../assets/exit.png'
import Log from '../../../assets/log.png'

export default function CustomDrawer({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.containerX}>
        <TouchableOpacity onPress={() => {
          navigation.closeDrawer()
        }}>
          <Image style={styles.Xicon} source={XIcon}/>
        </TouchableOpacity>
      </View>
      <View style={styles.contentCon}>
        <TouchableOpacity style={styles.touchDrawer} onPress={() => {
          navigation.navigate('Perfil')
        }}>
          <Text style={styles.textDrawer}>Perfil</Text>
          <Image style={styles.iconDrawer}  source={AccIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchDrawer} onPress={() => {
          navigation.navigate('Start')
        }}>
          <Text style={styles.textDrawer}>Sair do Aplicativo</Text>
          <Image style={styles.iconDrawer} source={ExitIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.logoCon}>
        <Image source={Log} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001242',
    flexDirection: 'column'
  },
  containerX: {
    flex: 1,
    maxHeight: 120,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  Xicon: {
    margin: 25
  },
  contentCon: {
    flex: 2,
    maxHeight: 300,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  touchDrawer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    marginRight: 25,
  },
  textDrawer: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFF',
  },
  iconDrawer: {
    alignSelf: 'center'
  },
  logoCon: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40
  }
})