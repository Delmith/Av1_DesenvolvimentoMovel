import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, Dimensions } from 'react-native'
import { Avatar, Badge } from 'react-native-elements'
import { Container, 
    Texto,
    ContainerGrupos,
    ContainerNome,
    ContainerAvatar,
    ContainerTarefas,
    TextGrupos,
    ContainerTextTarefas,
    ContainerFooter,
    TextoFooter,
    RedesLinks,
    ContainerImagem,
    Background
     } from '../../ReusableComponents/styles';
import { Button } from '../../ReusableComponents/CommonButton'
import { ProgressBar, Colors } from 'react-native-paper';


export default function Tela36(navigation) {
    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
            <Background source={require('../../grupou_assets/grafismos/grafismo_backgroud.png')}>
        <Container>
                <Texto>Grupos</Texto>
                <ContainerGrupos>
                    <ContainerNome>
                        <View>
                        <TextGrupos>Gestão do Design</TextGrupos>
                        <Text style={styles.textoAV}>AV1</Text>
                        </View>
                        <Button titulo = 'Ver mais' corTexto='#c427cc' borderColor='#c427cc' />
                    </ContainerNome>
                    <ContainerAvatar>
                        <Avatar rounded source={require("../../grupou_assets/img1.jpg")} size={45}>
                        <Badge status="success" containerStyle={{ position: 'absolute', top: 35, left:35}}/>
                        </Avatar>
                        <Avatar rounded source={require("../../grupou_assets/img2.jpg")} size={45}>
                        <Badge status="success" containerStyle={{ position: 'absolute', top: 35, left: 35}}/>
                        </Avatar>
                        <Avatar rounded source={require("../../grupou_assets/img3.jpg")} size={45}></Avatar>
                        <Avatar rounded source={require("../../grupou_assets/img4.jpg")} size={45}></Avatar>
                        <Avatar rounded source={require("../../grupou_assets/img5.jpg")} size={45}>
                        <Badge status="success" containerStyle={{ position: 'absolute', top: 35, left: 35}}/>
                        </Avatar>                        
                    </ContainerAvatar>
                    <ContainerTextTarefas>
                    <Text style={styles.texto}>Tarefas concluídas</Text>
                    </ContainerTextTarefas>
                    <ContainerTarefas>
                        <ProgressBar progress={0.78} color={Colors.orange300} style={styles.bar}/>
                        <Text style={styles.progresso}>78%</Text>
                    </ContainerTarefas>
                </ContainerGrupos>

                <ContainerGrupos>
                    <ContainerNome>
                        <View>
                        <TextGrupos>Fotografia</TextGrupos>
                        <Text style={styles.textoAV}>AV1</Text>
                        </View>
                        <Button titulo = 'Ver mais'/>
                    </ContainerNome>
                    <ContainerAvatar>
                        <Avatar rounded source={require("../../grupou_assets/img1.jpg")} size={45}>
                        <Badge status="success" containerStyle={{ position: 'absolute', top: 35, left:35}}/>
                        </Avatar>
                        <Avatar rounded source={require("../../grupou_assets/img2.jpg")} size={45}>
                        <Badge status="success" containerStyle={{ position: 'absolute', top: 35, left: 35}}/>
                        </Avatar>
                        <Avatar rounded source={require("../../grupou_assets/img3.jpg")} size={45}></Avatar>
                        <Avatar rounded source={require("../../grupou_assets/img4.jpg")} size={45}></Avatar>
                        <Avatar rounded source={require("../../grupou_assets/img5.jpg")} size={45}>
                        <Badge status="success" containerStyle={{ position: 'absolute', top: 35, left: 35}}/>
                        </Avatar>
                    </ContainerAvatar>
                    <ContainerTextTarefas>
                    <Text style={styles.texto}>Tarefas concluídas</Text>
                    </ContainerTextTarefas>
                    <ContainerTarefas>
                        <ProgressBar progress={0.78} color={Colors.orange300} style={styles.bar}/>
                        <Text style={styles.progresso}>78%</Text>
                    </ContainerTarefas>
                </ContainerGrupos>

                <ContainerGrupos>
                    <ContainerNome>
                        <View>
                        <TextGrupos>Webdesign</TextGrupos>
                        <Text style={styles.textoAV}>AV1</Text>
                        </View>
                        <Button titulo = 'Ver mais'/>
                    </ContainerNome>
                    <ContainerAvatar>
                        <Avatar rounded source={require("../../grupou_assets/img1.jpg")} size={45}>
                        <Badge status="success" containerStyle={{ position: 'absolute', top: 35, left:35}}/>
                        </Avatar>
                        <Avatar rounded source={require("../../grupou_assets/img2.jpg")} size={45}>
                        <Badge status="success" containerStyle={{ position: 'absolute', top: 35, left: 35}}/>
                        </Avatar>
                        <Avatar rounded source={require("../../grupou_assets/img3.jpg")} size={45}></Avatar>
                        <Avatar rounded source={require("../../grupou_assets/img4.jpg")} size={45}></Avatar>
                        <Avatar rounded source={require("../../grupou_assets/img5.jpg")} size={45}>
                        <Badge status="success" containerStyle={{ position: 'absolute', top: 35, left: 35}}/>
                        </Avatar>
                    </ContainerAvatar>
                    <ContainerTextTarefas>
                    <Text style={styles.texto}>Tarefas concluídas</Text>
                    </ContainerTextTarefas>
                    <ContainerTarefas>
                        <ProgressBar progress={0.78} color={Colors.orange300} style={styles.bar}/>
                        <Text style={styles.progresso}>78%</Text>
                    </ContainerTarefas>
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
        
    },

    bar:{
            width: 220, 
            height: 10, 
            marginTop: 10, 
            borderRadius: 50
    },

    textoAV:{
        color: 'grey',
        fontSize: 20,
        marginTop: 2
    },

    progresso:{
        color: '#ed9e2f',
        fontSize: 17,
        paddingTop: 5,
        paddingLeft: 10,
    },

    navbarfooter:{
        alignItems: 'center',
        justifyContent: 'center'
    },

});