import Login from './pages/login';
import Listagem from './pages/listagem';
import Cadastrar from './pages/cadastrar';

import { createBottomTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation";

const AuthStack = createStackNavigator({Login});

const MainNavigator = createBottomTabNavigator(
    {
       
        Listagem,
        Cadastrar 
    },
   
);
export default createAppContainer(createSwitchNavigator(
    {
        MainNavigator,
        AuthStack
    },
    {initialRouteName:"AuthStack"}
));