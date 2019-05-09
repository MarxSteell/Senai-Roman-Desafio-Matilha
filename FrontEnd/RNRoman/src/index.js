import Login from './pages/login';
import Listagem from './pages/listagem';
import Cadastrar from './pages/cadastrar';

import { createBottomTabNavigator, createAppContainer } from "react-navigation";

const MainNavigator = createBottomTabNavigator(
    {
        Login,
        Listagem,
        Cadastrar 
    },
    {
        initialRouteName: "Login",
    }
   
);
export default createAppContainer(MainNavigator);