import Home   from './screens/Home';
import Carrinho from './screens/Carrinho';
import Local  from './screens/Local';
import Raquetes  from './screens/Raquetes';
import Roupas  from './screens/Roupas';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: "#1a5c47",
        tabBarActiveBackgroundColor: "#a5d1c3",
        //tabBarShowLabel: false
        tabBarLabelStyle: { fontSize: 12, fontWeight: 900 }
      }}>

        <Tab.Screen name='Início' component={Home} 
          options={{ tabBarIcon: () => <Icon name='home' size={20} /> }}
        />
        
        <Tab.Screen name='Endereço' component={Local} 
          options={{ tabBarIcon: () => <Icon name='settings' size={20} /> }}
        />
        
        <Tab.Screen name='Raquetes' component={Raquetes}         
          options={{ 
            tabBarIcon: () => <Icon name='information-circle' size={20} /> ,
            tabBarBadge: 2,
            tabBarBadgeStyle: { backgroundColor: "green", color: "white" }
          }}
        />

            <Tab.Screen name='Roupas' component={Roupas} 
          options={{ tabBarIcon: () => <Icon name='settings' size={20} /> }}
        />
        
            <Tab.Screen name='Carrinho' component={Carrinho} 
          options={{ tabBarIcon: () => <Icon name='settings' size={20} /> }}
        />

      </Tab.Navigator>

    </NavigationContainer>
    
  );
}