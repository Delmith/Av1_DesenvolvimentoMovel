import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'
import { Avatar } from 'react-native-elements'
import { Container, 
    Texto,
    ContainerGrupos,
    ContainerNome,
    ContainerSkills,
    ContainerTarefas,
    TextGrupos,
    ContainerTextTarefas,
    ContainerFooter,
    TextoFooter,
    RedesLinks,
    ContainerImagem,
    Background,
    BotaoVoador
     } from '../../ReusableComponents/styles';

import { Button, Skills } from '../../ReusableComponents/CommonButton';
import { ProgressBar, Colors } from 'react-native-paper';



export default function Tela40(navigation) {
    return (
        <>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <Background source={require('../../grupou_assets/grafismos/grafismo_backgroud.png')}>
        <Container>
                <Texto>Skills</Texto>
                <ContainerGrupos>

                    <ContainerNome>
                        <View>
                        <TextGrupos>Minhas hard skills</TextGrupos>
                        </View>
                        <Button titulo = 'Editar'/>
                    </ContainerNome>

                        <ContainerTextTarefas>
                        <Text style={styles.texto}>HTML</Text>
                        </ContainerTextTarefas>
                        <ContainerTarefas>
                            <ProgressBar progress={0.92} color={Colors.purple500} style={styles.bar}/>
                            <Text style={styles.progresso}>9,2</Text>
                        </ContainerTarefas>

                        <ContainerTextTarefas>
                        <Text style={styles.texto}>Prototipação</Text>
                        </ContainerTextTarefas>
                        <ContainerTarefas>
                            <ProgressBar progress={0.88} color={Colors.purple500} style={styles.bar}/>
                            <Text style={styles.progresso}>8,8</Text>
                        </ContainerTarefas>

                        <ContainerTextTarefas>
                        <Text style={styles.texto}>HTML</Text>
                        </ContainerTextTarefas>
                        <ContainerTarefas>
                            <ProgressBar progress={0.92} color={Colors.purple500} style={styles.bar}/>
                            <Text style={styles.progresso}>9,2</Text>
                        </ContainerTarefas>

                        <ContainerTextTarefas>
                        <Text style={styles.texto}>Prototipação</Text>
                        </ContainerTextTarefas>
                        <ContainerTarefas>
                            <ProgressBar progress={0.88} color={Colors.purple500} style={styles.bar}/>
                            <Text style={styles.progresso}>8,8</Text>
                        </ContainerTarefas>

                        <ContainerTextTarefas>
                        <Text style={styles.texto}>HTML</Text>
                        </ContainerTextTarefas>
                        <ContainerTarefas>
                            <ProgressBar progress={0.92} color={Colors.purple500} style={styles.bar}/>
                            <Text style={styles.progresso}>9,2</Text>
                        </ContainerTarefas>

                        <ContainerTextTarefas>
                        <Text style={styles.texto}>Prototipação</Text>
                        </ContainerTextTarefas>
                        <ContainerTarefas>
                            <ProgressBar progress={0.88} color={Colors.purple500} style={styles.bar}/>
                            <Text style={styles.progresso}>8,8</Text>
                        </ContainerTarefas>

                        <ContainerTextTarefas>
                        <Text style={styles.texto}>HTML</Text>
                        </ContainerTextTarefas>
                        <ContainerTarefas>
                            <ProgressBar progress={0.92} color={Colors.purple500} style={styles.bar}/>
                            <Text style={styles.progresso}>9,2</Text>
                        </ContainerTarefas>

                        <ContainerTextTarefas>
                        <Text style={styles.texto}>Prototipação</Text>
                        </ContainerTextTarefas>
                        <ContainerTarefas>
                            <ProgressBar progress={0.88} color={Colors.purple500} style={styles.bar}/>
                            <Text style={styles.progresso}>8,8</Text>
                        </ContainerTarefas>

                </ContainerGrupos>

                <ContainerGrupos>
                <ContainerNome>
                        <View>
                        <TextGrupos>Minhas soft skills</TextGrupos>
                        </View>
                        <Button titulo = 'Editar'/>
                    </ContainerNome>

                    <ContainerSkills>
                        <Skills titulo='Liderança' bg='#4cb6e0' colorText='white' bold='bold'/>
                        <Skills titulo='Empatia' bg='#4cb6e0' colorText='white' bold='bold'/>
                        <Skills titulo='Gestão de Conflitos' bg='#4cb6e0' colorText='white' bold='bold'/>
                        <Skills titulo='Comunicação' bg='#4cb6e0' colorText='white' bold='bold'/>
                        <Skills titulo='Liderança' bg='#4cb6e0' colorText='white' bold='bold'/>
                        <Skills titulo='Empatia' bg='#4cb6e0' colorText='white' bold='bold'/>
                    </ContainerSkills>
                </ContainerGrupos>

                <ContainerGrupos>
                <ContainerNome>
                        <View>
                        <TextGrupos>Minhas hard skills</TextGrupos>
                        <TextGrupos>de interesse</TextGrupos>
                        </View>
                        <Button titulo = 'Editar'/>
                    </ContainerNome>

                    <ContainerSkills>
                        <Skills titulo='C#' bg='#4cb6e0' colorText='white' bold='bold'/>
                        <Skills titulo='Ilustração' bg='#4cb6e0' colorText='white' bold='bold'/>
                        <Skills titulo='Vetorização' bg='#4cb6e0' colorText='white' bold='bold'/>
                        <Skills titulo='Manipulação de imagens' bg='#4cb6e0' colorText='white' bold='bold'/>
                        <Skills titulo='C++' bg='#4cb6e0' colorText='white' bold='bold'/>
                        <Skills titulo='HTML' bg='#4cb6e0' colorText='white' bold='bold'/>
                        <Skills titulo='Prototipagem' bg='#4cb6e0' colorText='white' bold='bold'/>
                    </ContainerSkills>
                </ContainerGrupos>

        </Container>
        </Background>
        <ContainerFooter>
            <TextoFooter>Contato</TextoFooter>
            <TextoFooter>grupou_contato@gmail.com</TextoFooter>
            <RedesLinks>
                <Avatar rounded source={require("../../grupou_assets/icones/logo_linkedin.png")} size={50}></Avatar>
                <Avatar rounded source={require("../../grupou_assets/icones/logo_instagram.png")} size={50}></Avatar>
                <Avatar rounded source={require("../../grupou_assets/icones/logo_facebook.png")} size={50}></Avatar>
            </RedesLinks>
            <ContainerImagem>
            <Image source={require('../../grupou_assets/grupou_bw.jpg')}/>
            </ContainerImagem>
        </ContainerFooter>
        </ScrollView>
        <BotaoVoador><Image source={require('../../grupou_assets/Plus.png')} style={styles.floatingButtonStyle}/></BotaoVoador>
        </>
    );
};



const styles = StyleSheet.create({
    texto:{
        color: 'grey',
        fontSize: 17,
    },

    bar:{
        width: 270, 
        height: 10, 
        marginTop: 10, 
        borderRadius: 50
},

    textoAV:{
        color: 'grey',
        fontSize: 19,
        marginTop: 2
    },

    progresso:{
        color: '#a819a8',
        fontSize: 17,
        paddingTop: 4,
        paddingLeft: 10,
    },

    navbarfooter:{
        alignItems: 'center',
        justifyContent: 'center'
    },

    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        //backgroundColor:'black'
      },
});