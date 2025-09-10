import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

// Telas de destino
import CadastroPescador from "./CadastroPescador";
import CadastroPesqueiro from "./CadastroPesqueiro";
import Login from "./Login";
import TelaGeralPescador from "./TelaGeralPescador";
import CalendarScreen from "./agendamento";

// Criação do navigator 
const Stack = createStackNavigator();

// Componente da tela inicial (commit test)
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.header}>
          <Text style={styles.subtitle}>
            Conectando pescadores e pesqueiros
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("./assets/fishon_logo.png")}
            style={styles.imagePlaceholder}
          />
        </View>
        <View style={styles.optionsContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.pesqueiroButton]}
            onPress={() => navigation.navigate("CadastroPesqueiro")}
          >
            <Text style={styles.buttonText}>Cadastre-se como Pesqueiro</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, styles.pescadorButton]}
            onPress={() => navigation.navigate("CadastroPescador")}
          >
            <Text style={styles.buttonText}>Cadastre-se como Pescador</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, styles.loginButton]}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={[styles.buttonText, styles.loginButtonText]}>
              Já tenho uma conta
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.botao, styles.textoClicavel]}
            onPress={() => navigation.navigate('TelaGeralPescador')} // Navega para TelaGeralPescador
          >
            <Text style={styles.textoClicavel}>Entrar sem Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2023 FISH.ON - Todos os direitos reservados
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

// Componente principal com navegação - CORRIGIDO
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="App"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="App" component={HomeScreen} />
        <Stack.Screen name="CadastroPescador" component={CadastroPescador} />
        <Stack.Screen name="CadastroPesqueiro" component={CadastroPesqueiro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TelaGeralPescador" component={TelaGeralPescador} />
        <Stack.Screen name="agendamento" component={CalendarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Estilos (mantenha igual)
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", justifyContent: "space-between" },
  header: { alignItems: "center", paddingTop: 40, paddingBottom: 20 },
  subtitle: { fontSize: 18, color: "#666", marginTop: 5 },
  imageContainer: { alignItems: "center", justifyContent: "center", marginVertical: 20 },
  imagePlaceholder: {
    width: 300,
    height: 300,
  },
  optionsContainer: { paddingHorizontal: 30, marginBottom: 40 },
  button: {
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center"
  },
  pesqueiroButton: { backgroundColor: "#1a2a6c" },
  pescadorButton: { backgroundColor: "#fdbb2d" },
  loginButton: { backgroundColor: "transparent", borderWidth: 2, borderColor: "#1a2a6c" },
  buttonText: { color: "white", fontSize: 16, fontWeight: "600" },
  loginButtonText: { color: "#1a2a6c" },
  footer: { padding: 20, alignItems: "center", marginBottom: 10 },
  footerText: { fontSize: 12, color: "#666" },
  textoClicavel: {
    color: "#1a2a6c",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
});
