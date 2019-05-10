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
    {
        tabBarOptions: {
           
            inactiveBackgroundColor: "#1B5E20",
            activeBackgroundColor: "#115220",
            style: {
              height: 50,
             
              
            },
            labelStyle:{
                color:"white",
                fontSize:14,
                textTransform:"uppercase",
                position:"relative",
                bottom:10
            }
          }
    }
   
);
export default createAppContainer(createSwitchNavigator(
    {
        MainNavigator,
        AuthStack
    },
    {initialRouteName:"AuthStack"}
));