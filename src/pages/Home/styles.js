import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Background = styled(SafeAreaView)`
  flex: 1;
  background-color: #F0F4FF;
`;

export const ContainerHome = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TitleHome = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #3b3dbf;
`;

export const ListBalance = styled.FlatList`
  max-height: 190px;
`;