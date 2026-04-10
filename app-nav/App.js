import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './src/HomeScreen';
import PerfilScreen from './src/PerfilScreen';
import ConfigScreen from './src/ConfigScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#1e40af',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              drawerActiveTintColor: '#1e40af',
              drawerActiveBackgroundColor: '#dbeafe',
              drawerLabelStyle: {
                fontSize: 16,
                fontWeight: '500',
              },
              drawerStyle: {
                backgroundColor: '#f8fafc',
              },
            }}
          >

          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Perfil" component={PerfilScreen} />
          <Drawer.Screen name="Configurações" component={ConfigScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}