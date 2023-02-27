import { StyleSheet } from 'react-native';


export const Ffont = {
  'fonts': require('../fonts/Oswald-Regular.ttf')

}


export const COLORS = {
  white: '#fff',
  black: '#000',

}



module.exports = StyleSheet.create({
  CompShadow: {
    shadowOffset: { width: 0, height: 12 },
    shadowRadius: 16,
    elevation: 5,
    shadowColor:'#14484B',
    shadowOpacity:52,
  },

  BtnBackground: {
    height: 40, width:40, backgroundColor: '#ffffff', alignContent: 'center', justifyContent: 'center', borderRadius: 15,margin:5,
  },
  backGroundColor:{
    backgroundColor:'#E7EEFB'
  },
  


});

