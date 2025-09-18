import React, { createContext, useEffect, useState } from 'react'

import api from '../services/api';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();

    async function signUp(email, password, name) {
        setLoadingAuth(true);
        try{
            const response = await api.post('/users', {
                name: name,
                email: email,
                password: password
            }) 
            setLoadingAuth(false);

            navigation.goBack();

        } catch(err) {
            console.log('Erro ao cadastrar: ', err);
            setLoadingAuth(false);
        }  
    }

    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('@finUser');

            if (storageUser) {
                const response = await api.get('/me', {
                    headers: {
                        Authorization: `Bearer ${storageUser}`
                    }
                })
                .catch(() => {
                    setUser(null);
                })
      
                api.defaults.headers.common['Authorization'] = `Bearer ${storageUser}`;
                setUser(response.data);
                setLoading(false);
            }
            setLoading(false);
        }

        loadStorage();
    }, []);

    async function signIn(email, password) {
        setLoadingAuth(true);
        try {
            const response = await api.post('/login', {
                email: email,
                password: password
            });
            const { id, name, token } = response.data;
            const data = {
                id, 
                name, 
                token,
                email,
            };

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setUser({
                id, 
                name, 
                email
            })

            setLoadingAuth(false);

            await AsyncStorage.setItem('@finToken', token);

            setUser({
                id, 
                name, 
                email
            })
            
        } catch (err) {
            console.log('Erro ao fazer login: ', err);
            setLoadingAuth(false);
        }
    }

    async function signOut() {
        await AsyncStorage.clear()
        .then(() => {
            setUser(null);
        })
    }

    return (
        <AuthContext.Provider value={{signed: !!user, user, signUp, signIn, loadingAuth, loading, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;