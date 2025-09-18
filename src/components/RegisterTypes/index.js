import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

import { RegisterContainer, RegisterTypeButton, RegisterLabel } from './styles';

export default function RegisterTypes({ type, sendTypeChanged }) {

    const [typeChecked, setTypeChecked] = React.useState(type);

    function changeType(name){
        if(name === 'receita'){
            setTypeChecked('receita');
            sendTypeChanged('receita');
        } else if(name === 'despesa'){  
            setTypeChecked('despesa');
            sendTypeChanged('despesa');
        }
    }

    return (
        <RegisterContainer>
            <RegisterTypeButton 
            checked={typeChecked === 'receita' ? true : false} onPress={() => changeType('receita')}>
                <Feather
                    name="arrow-up"
                    color="#121212"
                    size={25}
                />
                <RegisterLabel>Receita</RegisterLabel>
            </RegisterTypeButton>

            <RegisterTypeButton checked={typeChecked === 'despesa' ? true : false}
            onPress={() => changeType('despesa')}>
                <Feather
                    name="arrow-down-circle"
                    color="#121212"
                    size={25}
                />
                <RegisterLabel>Despesa</RegisterLabel>
            </RegisterTypeButton>

        </RegisterContainer>
    );
};