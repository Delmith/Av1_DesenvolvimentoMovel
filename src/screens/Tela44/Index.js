import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'
import { Avatar } from 'react-native-elements'
import { Container, 
    Texto,
    ContainerGrupos,
    ContainerNome,
    ContainerAvatar,
    ContainerTarefas,
    ContainerSkills,
    TextGrupos,
    ContainerTextTarefas,
    ContainerFooter,
    TextoFooter,
    RedesLinks,
    ContainerImagem,
    Background
     } from '../../ReusableComponents/styles';
import { Button, Skills} from '../../ReusableComponents/CommonButton'
import { ProgressBar, Colors } from 'react-native-paper';



export default function Tela44(navigation) {
    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <Background source={require('../../grupou_assets/grafismos/grafismo_backgroud.png')}>
        <Container>
                <Texto>Meu perfil</Texto>
                <ContainerGrupos>
                    <ContainerNome>
                        <View>
                        <TextGrupos>Dados pessoais</TextGrupos>
                        </View>
                        <Button titulo = 'Editar' corTexto='#c427cc' borderColor='#c427cc' />
                    </ContainerNome>
                    <ContainerAvatar style={{marginTop: 20}}>
                        <View/>
                        <Avatar rounded source={require("../../grupou_assets/img4.jpg")} size={100}/>                 
                        <View/>
                    </ContainerAvatar>
                    <ContainerTextTarefas style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{...styles.texto, fontSize: 23, fontWeight: 'bold'}}>Bernardo Cavalcante</Text>
                        <Text style={styles.texto}>bernardo.cavalcante@gmail.com</Text>
                    </ContainerTextTarefas>
                    <ContainerTarefas style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Skills titulo={'Sair'} colorText={'#c427cc'} bold={'bold'} fsize={20}/> 
                    </ContainerTarefas>
                </ContainerGrupos>

                <ContainerGrupos>
                    
                    <ContainerNome>
                        <View>
                        <TextGrupos>Minhas soft skills</TextGrupos>
                        
                        </View>
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
                        <TextGrupos>Avaliações recebidas</TextGrupos>
                        </View>
                    </ContainerNome>

                    <ContainerAvatar style={{marginTop: 20}}>
                        <Avatar rounded source={require("../../grupou_assets/happy.png")} size={100}/>                 
                        <View style={{flex:1, marginLeft: 15}}>
                            <Text style={{fontSize: 20, color: 'grey', fontWeight: 'bold'}}>Sua média</Text>
                            <Text style={styles.avaliacao}>3,9</Text>
                        </View>
                    </ContainerAvatar>

                    <View style={{ width: '85%', justifyContent: 'flex-start', marginTop: 25}}>
                        <Text style={styles.texto}>Seus colegas te avaliaram com as seguintes soft skills</Text>
                    </View>

                    <ContainerSkills>
                        <Skills titulo='Liderança' bg='#4cb6e0' colorText='white' bold='bold'/>
                        <Skills titulo='Empatia' bg='#4cb6e0' colorText='white' bold='bold'/>
                        <Skills titulo='Gestão de Conflitos' bg='#4cb6e0' colorText='white' bold='bold'/>
                        <Skills titulo='Comunicação' bg='#4cb6e0' colorText='white' bold='bold'/>
                        <Skills titulo='Liderança' bg='#4cb6e0' colorText='white' bold='bold'/>
                        <Skills titulo='Empatia' bg='#4cb6e0' colorText='white' bold='bold'/>
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
    );
};

const styles = StyleSheet.create({
    texto:{
        color: 'grey',
        fontSize: 17,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    avaliacao:{
        color: '#2ac953',
        fontWeight: 'bold',
        fontSize: 50,
    },

    textoAV:{
        color: 'grey',
        fontSize: 20,
        marginTop: 2
    },

    bar:{
        width: 220, 
        height: 10, 
        marginTop: 10, 
        borderRadius: 50
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

});