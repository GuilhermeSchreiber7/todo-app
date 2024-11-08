import { MaterialIcons } from '@expo/vector-icons';
import {Tabs} from 'expo-router'
export default function TabLayout() {
    return(
        <Tabs>
        <Tabs.Screen name="index" options={{
            title: "home",
             tabBarIcon: () => (
                <MaterialIcons name='home' size={24} color="black" />
             )
             }}/>
        <Tabs.Screen name="about" options={{ 
            title: "about",
            tabBarIcon: () => (
                <MaterialIcons name='info' size={24} color="black" />
             ) 
             }}/>
        </Tabs>
    );
}