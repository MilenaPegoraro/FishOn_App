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

  const handleConfirmar = async () => {
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    try {
      const response = await fetch("http://InsiraAquiOIpDaMaquina:3000/usuarios", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nomeCompleto,
          email,
          cpf,
          telefone,
          senha,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Cadastro realizado com sucesso!");
        // opcional: limpar campos
        setNomeCompleto("");
        setEmail("");
        setCpf("");
        setTelefone("");
        setSenha("");
        setConfirmarSenha("");
      } else {
        alert("❌ Erro: " + data.message);
      }
    } catch (error) {
      alert("Erro de conexão com o servidor: " + error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

    <Text style={styles.titulo}>Crie uma conta como pescador</Text>



      <View style={styles.contentContainer}>

        <Text style={styles.label}>Nome completo *</Text> 
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome completo"
          value={nomeCompleto}
          onChangeText={setNomeCompleto}
        />
        <Text style={styles.label}>Email *</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.label}>CPF *</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu CPF"
          value={cpf}
          onChangeText={(texto) => setCpf(formatarCPF(texto))}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Telefone *</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu Telefone"
          value={telefone}
          onChangeText={(texto) => setTelefone(formatarTelefone(texto))}
          keyboardType="phone-pad"
        />
        <Text style={styles.label}>Senha *</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        <Text style={styles.label}>Confirme a senha *</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
          secureTextEntry
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />
      </View>

      {/* Botões de ação */}
      <View style={styles.botoesContainer}>
      <TouchableOpacity 
                style={[styles.botao, styles.botaoVoltar]}
          onPress={() => navigation.goBack()}
      >
      <Text style={styles.textoBotaoVoltar}>Voltar</Text>
      </TouchableOpacity>
      <TouchableOpacity 
                style={[styles.botao, styles.botaoConfirmar]}
                onPress={handleConfirmar}
      >
      <Text style={styles.textoBotaoConfirmar}>Confirmar</Text>
      </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#1a2a6c',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    marginTop: 10,
    color: '#333',
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
    botao: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  botaoVoltar: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#1a2a6c',
  },
  textoBotaoVoltar: {
    color: '#1a2a6c',
    fontWeight: 'bold',
    fontSize: 16,
  },
  botaoConfirmar: {
    backgroundColor: '#1a2a6c',
  },
  textoBotaoConfirmar: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
    botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
});
