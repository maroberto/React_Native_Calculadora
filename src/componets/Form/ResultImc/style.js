import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
 resulteImc: {
     flex: 1,
     marginTop:5,
     paddingTop:5,
     borderRadius:50,
     alignItems:"center",
     width: "100%",
 },
 numberImc:{
    fontSize:48,
    color: "#ff0046",
    fontWeight:"bold",
 },
 infomation:{
     fontSize:18,
     color:"#ff0046",
     fontWeight:"bold",
 },
 boxShareButton:{
     width: "100%",
     alignItems:"center",
     marginBottom:10,
 },
 shared:{
     backgroundColor:"#1877f2",
     borderRadius: 50,
     paddingBottom: 5,
     paddingTop: 0,
 },
 shareText:{
     color: "#ffffff",
     fontWeight:"bold",
     paddingHorizontal: 30,
 }
});

export default styles
