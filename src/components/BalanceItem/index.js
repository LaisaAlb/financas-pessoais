import React, { useMemo } from 'react';
import { Container, Label, Balance } from './styles';

export default function BalanceItem({ data }) {

    const labelMemo = useMemo(() => {
        if (data.tag === 'saldo') {
            return {
                label: 'Saldo Atual', 
                color: '3b3dbf'
            } 
        }
        else if (data.tag === 'receita') {
            return {
                label: 'Entradas de hoje', 
                color: '00b94a'
            } 
        }
        else {
            return {
                label: 'Saídas de hoje', 
                color: 'ff0000'
            }
        }
    }, [data]);

    return (
        <Container bg={labelMemo.color}>
            <Label>{labelMemo.label}</Label>
            <Balance>R$ {data.saldo}</Balance>
        </Container>
    );
}