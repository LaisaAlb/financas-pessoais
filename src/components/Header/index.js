import React from 'react';
import { ContainerHeader, Title, ButtonMenu } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function Header( { title }) {
  const navigation = useNavigation();

  return (
    <ContainerHeader>
        <ButtonMenu onPress={() => navigation.openDrawer()} >
          <Icon name="menu" size={30} color="#121212" />
        </ButtonMenu>
      { title && <Title>{title}</Title> }
    </ContainerHeader>
  );
}

