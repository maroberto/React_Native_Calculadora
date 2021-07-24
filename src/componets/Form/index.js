
import React, { useState } from "react"
import { 
  TextInput, 
  View, 
  Text, 
  TouchableOpacity,
  Vibration 
} from "react-native"
import styles from "./style"
import ResulteImc from "./ResultImc/"


export default function Form(){

const [height, setHeight]= useState(null)
const [weight, setWeight]= useState(null)
const [messageImc, setMessageImc]= useState("Preecha o peso e altura")
const [imc, setImc]= useState(null)
const [textButton, setTextButton]= useState("Calcular")
const [erroMessage, setErroMessage] = useState(null)

function imcCalculator(){
  return setImc((weight/(height*height)).toFixed(2))
}

function verificationImc(){
  if(imc == null){
    Vibration.vibrate();
    setErroMessage("Campo Obrigatório*")
  }
}

function validationImc(){
  if (weight != null && height != null){
     imcCalculator()
     setHeight(null)
     setWeight(null)
     setMessageImc("Seu imc é igual: ")
     setTextButton("Calcular Novamente")
     setErroMessage(null)
     return
  }
  verificationImc()
  setImc(null)
  setTextButton("Calcular")
  setMessageImc("Preencha o peso e altura")
  
}
  return(
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <Text style={styles.errorMessage}>{erroMessage}</Text>
        <TextInput 
           style={styles.input}
           onChangeText={setHeight}
           value={height}
           placeholder="Ex. 1.75"
           keyboardType="numeric"
           />
            
           <Text style={styles.formLabel}>Peso</Text>
           <Text style={styles.errorMessage}>{erroMessage}</Text>
           <TextInput style={styles.input}
           sy
           onChangeText={setWeight}
           value={weight}
           placeholder="Ex. 75.365"
           keyboardType="numeric"
           />

           <TouchableOpacity
             style={styles.buttonCalculator}
             onPress={() =>{
               validationImc()
             }}
             
             
            >
              <Text style={styles.textButtonCalculator}>{textButton}</Text>
           </TouchableOpacity>
      </View>
           <ResulteImc messageResultImc={messageImc} ResulteImc={imc}/>
    </View>

  );
}