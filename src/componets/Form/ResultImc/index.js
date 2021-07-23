import React from "react"
import { View, Text } from "react-native"
import styles from "./style"

export default function ResulteImc(props){
  return(
    <View style={styles.resulteImc}>
        <Text style={styles.infomation}>{props.messageResultImc}</Text>
        <Text style={styles.numberImc}>{props.ResulteImc}</Text>
        
    </View>

  );
}