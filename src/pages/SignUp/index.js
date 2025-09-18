import React, { useContext, useState } from 'react';
import { Platform, ActivityIndicator } from 'react-native';

import { Background, Container, AreaInput, Input, SubmitButton, SubmitText, Logo } from '../SignIn/styles';

import { AuthContext } from '../../contexts/auth';

export default function SignUp() {

  const { signUp, loadingAuth } = useContext(AuthContext);
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  function handleSignUp() {
    if( name === '' || email === '' || password === '' ) {
      return;
    }
    
    signUp(email, password, name);
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <Logo source={require('../../assets/Logo.png')} />

        <AreaInput>
          <Input placeholder="Nome" 
            value={name} 
            onChangeText={(text) => setName(text)} />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Seu Email" 
          value={email} 
          onChangeText={(text) => setEmail(text)} />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Sua Senha" 
          value={password} 
          onChangeText={(text) => setPassword(text)} 
          secureTextEntry={true} />
        </AreaInput>

        <SubmitButton activeOpacity={0.8} onPress={handleSignUp}>
          { loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <SubmitText>Cadastrar</SubmitText>
          )}
        </SubmitButton>

      </Container>

    </Background>
  )
}