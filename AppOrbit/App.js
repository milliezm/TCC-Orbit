import React from "react";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Inicio from "./src/telas/Inicio/index.js";
import Login from "./src/telas/Login/index.js";
import Cadastro from "./src/telas/Cadastro/index.js";
import InfoPessoal from "./src/telas/Cadastro/infopessoal.js";
import Home from "./src/telas/Home/index.js";
import Orbitas from "./src/telas/Orbitas/index.js";
import CadOrbitas from "./src/telas/CadOrbitas/index.js";
import CriarOrbita from "./src/telas/CadOrbitas/criarOrbita.js";
import addImg from "./src/telas/CadOrbitas/addImg.js";
import Desaparecimento from "./src/telas/Desaparecimento/index.js";
import CadDesaparecimento from "./src/telas/CadDesaparecimento/index.js";
import Usuario from "./src/telas/Usuario/index.js";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          color = "#00BFB6";
          size = 30;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Desaparecimento") {
            iconName = focused ? "newspaper" : "newspaper";
          } else if (route.name === "Orbitas") {
            iconName = focused
              ? "planet"
              : "planet";
          } else if (route.name === "Usuario") {
            iconName = focused
              ? "person"
              : "person";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        labelStyle: {
          fontSize: 12,
        },
        activeTintColor: "#00BFB6",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={Home}></Tab.Screen>
      <Tab.Screen name="Usuario" component={Usuario}></Tab.Screen>
      <Tab.Screen name="Desaparecimento" component={Desaparecimento}></Tab.Screen>
      <Tab.Screen name="Orbitas" component={Orbitas}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">

        <Stack.Screen 
          name="Inicio" 
          component={Inicio} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Orbitas" 
          component={Orbitas} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Desaparecimento" 
          component={Desaparecimento} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Usuario" 
          component={Usuario} 
          options={{ headerShown: false }} 
        />


        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="InfoPessoal" component={InfoPessoal} />
        <Stack.Screen name="CadOrbitas" component={CadOrbitas} />
        <Stack.Screen name="CriarOrbita" component={CriarOrbita} />
        <Stack.Screen name="addImg" component={addImg} />
        <Stack.Screen name="CadDesaparecimento" component={CadDesaparecimento} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
