import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import NewRegister from '../pages/NewRegister';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// Stack da Home
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

// Stack do Novo Registro
function NewRegisterStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="NewRegister" component={NewRegister} />
    </Stack.Navigator>
  );
}

export default function AppRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: '#FFF', paddingTop: 20 },
        drawerActiveBackgroundColor: '#3b3dbf',
        drawerActiveTintColor: '#FFF',
        drawerInactiveBackgroundColor: '#F0F2FF',
        drawerInactiveTintColor: '#121212',
      }}
    >
      <Drawer.Screen 
        name="HomeStack" 
        component={HomeStack} 
        options={{ title: 'Home', drawerLabel: 'Home' }} 
      />
      <Drawer.Screen 
        name="NewRegisterStack" 
        component={NewRegisterStack} 
        options={{ title: 'Novo Registro', drawerLabel: 'Novo Registro' }} 
      />
    </Drawer.Navigator>
  );
}
