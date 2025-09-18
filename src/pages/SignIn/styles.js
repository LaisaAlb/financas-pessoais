import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #F0F4FF;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  `;

export const Logo = styled.Image`
  margin-bottom: 25px;`;

export const AreaInput = styled.View`
flex-direction: row;`;

export const Input = styled.TextInput`
  background-color: #FFF;
  width: 90%;
  font-size: 17px;
  padding: 10px 15px;
  border-radius: 8px;
  color: #121212;
  margin-bottom: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
 width: 90%;
 height: 45px;
 align-items: center;
 justify-content: center;
 border-radius: 8px;
 margin-top: 10px;
 background-color: #3B3DBF;   
`;

export const SubmitText = styled.Text` 
 font-size: 20px;
 color: #FFF;
`;

export const LinkButton  = styled.TouchableOpacity`
 margin-top: 15px;
 margin-bottom: 20px;
`;

export const LinkText = styled.Text`
 color: #171717;
 padding: 10px;
 font-size: 18px;
 `;

