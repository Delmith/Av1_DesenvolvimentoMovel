import React from 'react';
import { Text, View, Image } from 'react-native'
import { Background } from '../../ReusableComponents/styles';
import { Colors } from 'react-native-paper';


export default function TelaAbertura(navigation) {
    return (
            <Background source={require('../../grupou_assets/background.jpg')}>
                <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>            
                    <Image source={require('../../grupou_assets/ponto.png')} style={{width:600, height:600, position: "absolute", top: -350, left: -110 }}/>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}> 
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 40}}>AV1</Text>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 40}}>Desenvolvimento Móvel</Text>
                    </View>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}> 
                    <Text style={{color: Colors.white, fontWeight: 'bold', fontSize: 20}}>Nome</Text>
                    <Text style={{color: Colors.purple500, fontWeight: 'bold', fontSize: 30}}>Vitor Braga Faccenda da Silva</Text>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, paddingTop: 20}}>Matrícula</Text>
                    <Text style={{color: Colors.purple500, fontWeight: 'bold', fontSize: 30,}}>2017101936</Text>
                    </View>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center', marginBottom: -110}}> 
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>Professor, utilize as abas abaixo</Text>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>e navegue pelas 4 páginas escolhidas.</Text>
                    </View>

                </View>
            </Background>
    );
};