import React from 'react';
import Header from '../../components/Header';
import { Background, ContainerHome, TitleHome } from './styles';

export default function Home() {
  return (
    <Background>
      <Header title="Minhas Movimentações" />
      <ContainerHome>
        <TitleHome>Bem-vindo(a)!</TitleHome>
      </ContainerHome>
    </Background>
  );
}
