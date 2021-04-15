import styled from 'styled-components/native';

export const Background = styled.ImageBackground`
    flex: 1;
    justifyContent: center;
    resizeMode: contain;
    backgroundColor: #4cb6e0;
    paddingBottom: 60px;
`;

export const Container = styled.View`
    flex:1;
    paddingTop: 60px;
    justifyContent: center;
    alignItems: center;
`;

export const FundoTela = styled.Image`
`;

export const ContainerGrupos = styled.View`
    backgroundColor: #fcfdff;
    width: 90%;
    flex: 1;
    border-radius: 15px;
    alignItems: center;
    justifyContent: center;
    marginTop: 20px;
    
`;

export const ContainerNome = styled.View`
    flex-direction: row;
    flex: 1;
    width: 85%;
    margin-top: 20px;
    alignItems: center;
    justifyContent: space-between;
`;

export const ContainerAtividade = styled.View`
flex-direction: row;
flex: 1;
width: 85%;
alignItems: center;
justifyContent: space-between;
marginTop: 40px; 
`;

export const TextGrupos = styled.Text`
    font-size: 25px;
    font-weight: bold;
`;

export const ContainerAvatar = styled.View`
    flex-direction: row;
    flex: 1
    width: 85%;
    justifyContent: space-between;
    alignItems: center;
    marginTop: 15px;
`;

export const ContainerSkills = styled.View`
    flexWrap: wrap;
    flex-direction: row;
    width: 85%;
    alignItems: flex-start;
    justifyContent: flex-start;
    marginBottom: 20px;
`;

export const ContainerTarefas = styled.View`
    flex-direction: row;
    flex: 1
    width: 85%;
    marginBottom: 20px;
`;
export const BarraProgresso = styled.View`
    height: 10px;
    marginTop: 10px;
    width: 215px;
    borderRadius: 25px;
    backgroundColor: #a819a8;
    
`;

export const BarraProgressoHTML = styled.View`
    height: 10px;
    marginTop: 10px;
    width: 270px;
    borderRadius: 25px;
    backgroundColor: #a819a8;  
`;

export const ContainerTextTarefas = styled.View`
    justifyContent: flex-start;
    width: 85%;
    marginTop: 10px;
`;
export const Texto = styled.Text`
    color: #ffffff;
    fontWeight: bold;
    font-size: 35px;
    paddingRight: 50%;
`;

export const ContainerFooter = styled.View`
    flex: 1;
    backgroundColor: #42094a;
    paddingTop: 10px;
    width: 100%;
`;

export const TextoFooter = styled.Text`
    color: white;
    marginTop: 35px;
    marginBottom: -30px;
    fontSize: 20px;
    textAlign: center;
`;

export const RedesLinks = styled.View`
    flex-direction: row;
    marginTop: 70px;
    justifyContent: space-evenly;
    alignItems: center;
`;

export const ContainerImagem = styled.View`
    width: 100%;
    alignItems: center;
    justifyContent: center;
    paddingTop: 40px;
    paddingBottom: 30px;
`;

export const NavBarFooter = styled.View`
    flex-direction: row;
    backgroundColor: #a819a8;
    alignItems: center;
    justifyContent: space-evenly;
    height: 65px;
    width: 100%;
`;

export const TextNavBarFooter = styled.Text`
    fontSize: 13px;
    color: white;
    paddingTop: 5px;
`;

export const FooterIcon = styled.Image`
    width: 30px;
    height: 30px;
`;

export const BotaoVoador = styled.TouchableOpacity`
    position: absolute;
    width: 50px;
    height: 50px;
    alignItems: center;
    justifyContent: center;
    right: 30px;
    bottom: 30px;
`;