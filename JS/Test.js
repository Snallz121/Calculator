import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Platform } from 'react-native';

import {vw, vh} from 'react-native-expo-viewport-units'

export default function Home()
{
    const bg = '#243441'
    const mainColor = '#ED802E'
    const txtColor = "#FFFFFF"

    const [calculation, setCalculations] = useState("")
    const [answer, setAnswer] = useState('')
    const [lastSymbol, setLastSymbol] = useState("")

    let calculationFont = 250

    function updateCalc(symb)
    {
        let newCalc = calculation + symb
        setCalculations(newCalc)

    }

    function deleteCalc(calculation){
        setCalculations('')
        setAnswer('')
    }

    function deleteLastSymbol(){
        setCalculations(pre => pre.slice(0,-1))
        setAnswer('')
    }


    async function solve()
    {
        try{
            setAnswer(eval(calculation))
        }
        catch(err){
            console.log(err)
        }
    }
    



    return(
        <View style={{height: vh(100), backgroundColor: bg}}>
            
            <View style={{position: 'absolute', top: calculationFont, right: 30}}>
                <Text style={{color: txtColor, fontSize: 20, fontWeight: 'bold', opacity: 0.5}}>{calculation}</Text>
            </View>
            <View style={{position: 'absolute', top: 200, right: 30}}>
                <Text style={{color: txtColor, fontSize: 50, fontWeight: 'bold', opacity: 1}}>{answer}</Text>
            </View>
            
            <View style={{width: vw(90), height: vh(60), margin: 20, flexDirection: 'row', flexWrap: 'wrap', position: 'absolute', bottom: -40, justifyContent: 'center', alignItems: 'center'}}>                

                <TouchableOpacity onPress={() => deleteCalc('AC')} style={{backgroundColor: '#243441', width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
                    <Text style={{color: mainColor, fontSize: 20, textAlign: 'center', marginTop: 15, fontWeight: 'bold'}}>AC</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteLastSymbol()} style={{backgroundColor: '#243441', width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
                    <Text style={{color: mainColor, fontSize: 20, textAlign: 'center', marginTop: 15, fontWeight: 'bold'}}>⌦</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => updateCalc('/100')} style={{backgroundColor: '#243441', width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
                    <Text style={{color: mainColor, fontSize: 20, textAlign: 'center', marginTop: 15, fontWeight: 'bold'}}>%</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => updateCalc('/')} style={{backgroundColor: '#243441', width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
                    <Text style={{color: mainColor, fontSize: 20, textAlign: 'center', marginTop: 15, fontWeight: 'bold'}}>/</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => updateCalc('7')} style={{backgroundColor: '#243441', width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
                    <Text style={{color: txtColor, fontSize: 20, textAlign: 'center', marginTop: 15, fontWeight: 'bold'}}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => updateCalc('8')} style={{backgroundColor: '#243441', width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
                    <Text style={{color: txtColor, fontSize: 20, textAlign: 'center', marginTop: 15, fontWeight: 'bold'}}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => updateCalc('9')} style={{backgroundColor: '#243441', width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
                    <Text style={{color: txtColor, fontSize: 20, textAlign: 'center', marginTop: 15, fontWeight: 'bold'}}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => updateCalc('*')} style={{backgroundColor: '#243441', width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
                    <Text style={{color: mainColor, fontSize: 20, textAlign: 'center', marginTop: 15, fontWeight: 'bold'}}>*</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => updateCalc('4')} style={{backgroundColor: '#243441', width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
                    <Text style={{color: txtColor, fontSize: 20, textAlign: 'center', marginTop: 15, fontWeight: 'bold'}}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => updateCalc('5')} style={{backgroundColor: '#243441', width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
                    <Text style={{color: txtColor, fontSize: 20, textAlign: 'center', marginTop: 15, fontWeight: 'bold'}}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => updateCalc('6')} style={{backgroundColor: '#243441', width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
                    <Text style={{color: txtColor, fontSize: 20, textAlign: 'center', marginTop: 15, fontWeight: 'bold'}}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => updateCalc('-')} style={{backgroundColor: '#243441', width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
                    <Text style={{color: mainColor, fontSize: 20, textAlign: 'center', marginTop: 15, fontWeight: 'bold'}}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => updateCalc('1')} style={{backgroundColor: '#243441', width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
                    <Text style={{color: txtColor, fontSize: 20, textAlign: 'center', marginTop: 15, fontWeight: 'bold'}}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => updateCalc('2')} style={{backgroundColor: '#243441', width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
                    <Text style={{color: txtColor, fontSize: 20, textAlign: 'center', marginTop: 15, fontWeight: 'bold'}}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => updateCalc('3')} style={{backgroundColor: '#243441', width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
                    <Text style={{color: txtColor, fontSize: 20, textAlign: 'center', marginTop: 15, fontWeight: 'bold'}}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => updateCalc('+')} style={{backgroundColor: '#243441', width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
                    <Text style={{color: mainColor, fontSize: 20, textAlign: 'center', marginTop: 15, fontWeight: 'bold'}}>+</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => updateCalc('0')} style={{backgroundColor: '#243441', width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
                    <Text style={{color: txtColor, fontSize: 20, textAlign: 'center', marginTop: 15, fontWeight: 'bold'}}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => updateCalc('.')} style={{backgroundColor: '#243441', width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
                    <Text style={{color: txtColor, fontSize: 20, textAlign: 'center', marginTop: 15, fontWeight: 'bold'}}>.</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => solve()} style={{backgroundColor: mainColor, width: 140, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
                    <Text style={{color: txtColor, fontSize: 20, textAlign: 'center', marginTop: 15, fontWeight: 'bold'}}>=</Text>
                </TouchableOpacity>
            </View>

            <View style={{backgroundColor: '#243441', width: vw(100), height: 50, position: 'absolute', bottom: -20, zIndex: -1000}}>

            </View>

        </View>
    )
}