import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CadastroPescador({ navigation }) {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  // Funções de validação
  const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validarCPF = (cpf) => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf); // formato com máscara
  const validarTelefone = (telefone) => /^\(\d{2}\)\s?\d{4,5}-\d{4}$/.test(telefone);

  // Máscara CPF
const formatarCPF = (valor) => {
  const apenasNumeros = valor.replace(/\D/g, "");
  return apenasNumeros
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{2})$/, "$1-$2") 
    .slice(0, 14);
};
  // Máscara Telefone
  const formatarTelefone = (valor) => {
    const apenasNumeros = valor.replace(/\D/g, "");
    if (apenasNumeros.length <= 10) {
      return apenasNumeros
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2")
        .slice(0, 14);
    } else {
      return apenasNumeros
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .slice(0, 15);
    }
  };

  const handleConfirmar = () => {
    if (!validarEmail(email)) {
      alert("Digite um email válido.");
      return;
    }
    if (!validarCPF(cpf)) {
      alert("Digite um CPF válido. Ex: 123.456.789-00");
      return;
    }
    if (!validarTelefone(telefone)) {
      alert("Digite um telefone válido. Ex: (11) 91234-5678");
      return;
    }
    if (!senha || !confirmarSenha) {
      alert("Preencha os campos de senha e confirmação de senha.");
      return;
    }
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    alert("Cadastro confirmado!");
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <Text style={styles.title}>Cadastro Pescador</Text>
      <Text style={styles.subtitle}>Crie uma conta como pescador</Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          value={nomeCompleto}
          onChangeText={setNomeCompleto}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="CPF"
          value={cpf}
          onChangeText={(texto) => setCpf(formatarCPF(texto))}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={telefone}
          onChangeText={(texto) => setTelefone(formatarTelefone(texto))}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirme a senha"
          secureTextEntry
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.confirmButton]} onPress={handleConfirmar}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", paddingTop: 40, alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", color: "#1a2a6c", marginBottom: 20 },
  subtitle: { fontSize: 16, color: "#666", marginBottom: 20 },
  formContainer: { width: "80%", marginBottom: 40 },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  buttonsContainer: { width: "80%" },
  button: {
    paddingVertical: 15,
    backgroundColor: "#1a2a6c",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  confirmButton: { backgroundColor: "#fdbb2d" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
