import Login from './pages/login';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

const MainNavigator = createBottomTabNavigator(
    {
        Login
    },
   
);
export default createAppContainer(MainNavigator);