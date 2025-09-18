import React, { useState } from 'react';
import { Background, Input, SubmitButton, SubmitText } from './styles';

import Header from '../../components/Header';
import RegisterTypes from '../../components/RegisterTypes';

import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function NewRegister() {

    const [labelInput, setLabelInput] = useState('');
    const [valueInput, setValueInput] = useState('');
    const [typeInput, setTypeInput] = useState('receita');

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Background>
                <Header title="Novo Registro" />

                <SafeAreaView style={{ marginTop: 14, alignItems: 'center' }}>
                    <Input
                        placeholder="Descrição desse Registro"
                        value={labelInput}
                        onChangeText={(text) => setLabelInput(text)}
                    />

                    <Input
                        placeholder="Valor desse Registro"
                        keyboardType="numeric"
                        value={valueInput}
                        onChangeText={(text) => setValueInput(text)}
                    />

                    <RegisterTypes type={typeInput} sendTypeChanged={(item) => setTypeInput(item)} />

                    <SubmitButton>
                        <SubmitText>Registrar</SubmitText>
                    </SubmitButton>

                </SafeAreaView>
            </Background>
        </TouchableWithoutFeedback>
    );
}