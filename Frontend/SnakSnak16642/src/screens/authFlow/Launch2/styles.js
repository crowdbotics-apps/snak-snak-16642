import {StyleSheet, Platform} from 'react-native';
// import {colors, WP, HP, size, family} from '../../../services';

export const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor:'#800203', 
    flexDirection:'column', 
    alignItems:'center', 
    justifyContent:'flex-start'
  },
  logoStyle: {
    marginBottom:20, 
    marginTop:40
  },
  title: {
    color:'white', 
    textAlign:'center', 
    marginBottom:10, 
    fontFamily:'Open Sans',
    fontWeight:'bold'
  },
  subTitle: {
    color:'white', 
    textAlign:'center', 
    marginBottom:10, 
    fontFamily:'Open Sans',
  },
  image2: {
    height: '100%', 
    width:'100%', 
    position:'absolute', 
    zIndex:-10, 
    bottom:-41
  },
  bottomView: { 
    position:'absolute', 
    zIndex:10, 
    bottom:100 
  },
  buttonLabelStyle: { 
    color: "#800203", 
    fontSize: 18, 
    paddingHorizontal:25 
  },
  indicatorView: {
    flexDirection:'row', 
    justifyContent:'center',
    marginTop:10
  },
  spaceBetween: {
    width:25
  }
});
