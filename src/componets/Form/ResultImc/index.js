import React from "react"
import { View, Text, TouchableOpacity, Share } from "react-native"
import styles from "./style"

export default function ResulteImc(props){

  const onShare = async () => {
    const result = await Share.share({
      message:"Meu imc hoje é: " +props.ResulteImc,
    }) 
  }
  return(
    <View style={styles.resulteImc}>
      <View style={styles.boxShareButton}>
        {props.ResulteImc != null ?
        <TouchableOpacity 
        onPress={onShare}
        style={styles.shared}>
          <Text style={styles.shareText}>Share</Text>
        </TouchableOpacity>
        :
        <View/>
        }
      </View>
        <Text style={styles.infomation}>{props.messageResultImc}</Text>
        <Text style={styles.numberImc}>{props.ResulteImc}</Text>
        
    </View>

  );
}