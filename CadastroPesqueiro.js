import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView,
  Switch,
  Alert
} from 'react-native';
 
export default function CadastroPesqueiro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [numeroConta, setNumeroConta] = useState('');
  const [agencia, setAgencia] = useState('');
  const [titular, setTitular] = useState('');
  const [isPoupanca, setIsPoupanca] = useState(false);
  const [isContaCorrente, setIsContaCorrente] = useState(true);
 
  const handleConfirmar = () => {
    // Validações básicas
    if (!nome || !email || !cnpj || !endereco || !telefone || !senha || !confirmarSenha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }
    if (!numeroConta || !agencia || !titular) {
      Alert.alert('Erro', 'Por favor, preencha os dados bancários.');
      return;
    }
    if (!isPoupanca && !isContaCorrente) {
      Alert.alert('Erro', 'Selecione o tipo de conta.');
      return;
    }
    // Aqui você faria a lógica de cadastro
    Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
    // navigation.navigate('Home'); // Descomente para navegar de volta
  };
 
  return (
<ScrollView 
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={true}
>
<Text style={styles.titulo}>Crie uma conta de pesqueiro</Text>
      {/* Seção de informações básicas */}
<View style={styles.secao}>
<Text style={styles.label}>Nome do pesqueiro *</Text>
<TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Digite o nome do pesqueiro"
        />
<Text style={styles.label}>Email *</Text>
<TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Digite o email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
<Text style={styles.label}>CNPJ *</Text>
<TextInput
          style={styles.input}
          value={cnpj}
          onChangeText={setCnpj}
          placeholder="Digite o CNPJ"
          keyboardType="numeric"
        />
<Text style={styles.label}>Endereço *</Text>
<TextInput
          style={styles.input}
          value={endereco}
          onChangeText={setEndereco}
          placeholder="Digite o endereço completo"
        />
<Text style={styles.label}>Telefone *</Text>
<TextInput
          style={styles.input}
          value={telefone}
          onChangeText={setTelefone}
          placeholder="Digite o telefone"
          keyboardType="phone-pad"
        />
</View>
<View style={styles.divisor} />
      {/* Seção de documentos e senha */}
<View style={styles.secao}>
<Text style={styles.label}>Anexe seu alvará</Text>
<TouchableOpacity style={styles.botaoAnexar}>
<Text style={styles.textoBotaoAnexar}>Selecionar arquivo</Text>
</TouchableOpacity>
<Text style={styles.label}>Senha *</Text>
<TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          placeholder="Digite sua senha"
          secureTextEntry
        />
<Text style={styles.label}>Confirme a senha *</Text>
<TextInput
          style={styles.input}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          placeholder="Confirme sua senha"
          secureTextEntry
        />
</View>
<View style={styles.divisor} />
      {/* Seção de dados bancários */}
<View style={styles.secao}>
<Text style={styles.subtitulo}>Dados Bancários</Text>
<Text style={styles.label}>Número de conta bancária *</Text>
<TextInput
          style={styles.input}
          value={numeroConta}
          onChangeText={setNumeroConta}
          placeholder="Digite o número da conta"
          keyboardType="numeric"
        />
<Text style={styles.label}>Número da agência *</Text>
<TextInput
          style={styles.input}
          value={agencia}
          onChangeText={setAgencia}
          placeholder="Digite o número da agência"
          keyboardType="numeric"
        />
<Text style={styles.label}>Nome do titular da conta bancária *</Text>
<TextInput
          style={styles.input}
          value={titular}
          onChangeText={setTitular}
          placeholder="Digite o nome do titular"
        />
<View style={styles.opcoesConta}>
<View style={styles.opcaoConta}>
<Switch
              value={isPoupanca}
              onValueChange={(value) => {
                setIsPoupanca(value);
                if (value) setIsContaCorrente(false);
              }}
            />
<Text style={styles.textoOpcao}>Poupança</Text>
</View>
<View style={styles.opcaoConta}>
<Switch
              value={isContaCorrente}
              onValueChange={(value) => {
                setIsContaCorrente(value);
                if (value) setIsPoupanca(false);
              }}
            />
<Text style={styles.textoOpcao}>Conta corrente</Text>
</View>
</View>
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
</ScrollView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
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
  secao: {
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
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
  divisor: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20,
  },
  botaoAnexar: {
    backgroundColor: '#1a2a6c',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  textoBotaoAnexar: {
    color: 'white',
    fontWeight: '600',
  },
  opcoesConta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  opcaoConta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textoOpcao: {
    marginLeft: 8,
    fontSize: 16,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
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
});