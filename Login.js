import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
 
  const handleLogin = () => {
    // Navega diretamente para a TelaGeralPescador, sem validações
    navigation.navigate('TelaGeralPescador'); // Navegação para TelaGeralPescador
  };

  const handleEsqueciSenha = () => {
    Alert.alert('Recuperar Senha', 'Funcionalidade de recuperação de senha será implementada.');
  };
 
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.content}>
        {/* Cabeçalho com logo */}
        <View style={styles.header}>
          <Text style={styles.logo}>
            FISH.<Text style={styles.logoAccent}>ON</Text>
          </Text>
        </View>
 
        {/* Formulário de login */}
        <View style={styles.formContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Digite seu email"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#999"
          />
 
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
            placeholder="Digite sua senha"
            secureTextEntry
            placeholderTextColor="#999"
          />
 
          {/* Link "Esqueci minha senha" */}
          <TouchableOpacity
            style={styles.esqueciSenhaButton}
            onPress={handleEsqueciSenha}
          >
            <Text style={styles.esqueciSenhaText}>Esqueci minha senha</Text>
          </TouchableOpacity>
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
            onPress={handleLogin} // Navega para TelaGeralPescador ao clicar em Confirmar
          >
            <Text style={styles.textoBotaoConfirmar}>Confirmar</Text>
          </TouchableOpacity>

        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1a2a6c',
  },
  logoAccent: {
    color: '#fdbb2d',
  },
  formContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
    marginTop: 15,
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    color: '#333',
  },
  esqueciSenhaButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  esqueciSenhaText: {
    color: '#1a2a6c',
    fontSize: 14,
    fontWeight: '500',
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
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
  // Estilo do botão "Next"
  botaoNext: {
    backgroundColor: '#fdbb2d',
  },
  textoBotaoNext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
