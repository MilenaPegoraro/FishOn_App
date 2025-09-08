import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
 
export default function PesquisaScreen({ navigation }) {
  const [pesquisa, setPesquisa] = useState('');
  // Dados mockados dos pesqueiros - caminhos corrigidos + 3 novos pesqueiros
  const pesqueiros = [
    {
      id: 1,
      nome: "Pesqueiro do Zé",
      localizacao: "São Paulo, SP",
      valor: 50.00,
      imagem: require('./assets/fishon_logo.png')
    },
    {
      id: 2,
      nome: "Pesque e Pague Sol Nascente",
      localizacao: "Campinas, SP",
      valor: 45.00,
      imagem: require('./assets/fishon_logo.png')
    },
    {
      id: 3,
      nome: "Rio Tranquilo Pesqueiro",
      localizacao: "Rio de Janeiro, RJ",
      valor: 60.00,
      imagem: require('./assets/fishon_logo.png')
    },
    {
      id: 4,
      nome: "Pesqueiro Paraíso",
      localizacao: "Belo Horizonte, MG",
      valor: 55.00,
      imagem: require('./assets/fishon_logo.png')
    },
    {
      id: 5,
      nome: "Lagoa Azul Pesqueiro",
      localizacao: "Curitiba, PR",
      valor: 65.00,
      imagem: require('./assets/fishon_logo.png')
    },
    // NOVOS PESQUEIROS ADICIONADOS:
    {
      id: 6,
      nome: "Pesqueiro Estrela do Mar",
      localizacao: "Santos, SP",
      valor: 70.00,
      imagem: require('./assets/fishon_logo.png')
    },
    {
      id: 7,
      nome: "Pesqueiro Recanto do Lago",
      localizacao: "Florianópolis, SC",
      valor: 80.00,
      imagem: require('./assets/fishon_logo.png')
    },
    {
      id: 8,
      nome: "Pesqueiro Vista Verde",
      localizacao: "Porto Alegre, RS",
      valor: 75.00,
      imagem: require('./assets/fishon_logo.png')
    }
  ];
 
  const filteredPesqueiros = pesqueiros.filter(pesqueiro =>
    pesqueiro.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
    pesqueiro.localizacao.toLowerCase().includes(pesquisa.toLowerCase())
  );
 
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#1a2a6c" />
        </TouchableOpacity>
        <Text style={styles.title}>Pesquisa</Text>
        <View style={styles.headerRight} />
      </View>
 
      {/* Barra de pesquisa */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar pesqueiros..."
          value={pesquisa}
          onChangeText={setPesquisa}
          placeholderTextColor="#999"
        />
      </View>
 
      {/* Lista de pesqueiros - ScrollView já está implementado */}
      <ScrollView 
        style={styles.listContainer}
        showsVerticalScrollIndicator={false}
      >
        {filteredPesqueiros.map((pesqueiro) => (
          <View key={pesqueiro.id}>
            <TouchableOpacity 
              style={styles.pesqueiroCard}
              onPress={() => navigation.navigate('DetalhesPesqueiro', { pesqueiro })}
            >
              <View style={styles.pesqueiroImageContainer}>
                <Image 
                  source={pesqueiro.imagem} 
                  style={styles.pesqueiroImage}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.pesqueiroInfo}>
                <Text style={styles.pesqueiroNome}>{pesqueiro.nome}</Text>
                <View style={styles.infoRow}>
                  <Ionicons name="location" size={16} color="#666" />
                  <Text style={styles.pesqueiroLocalizacao}>{pesqueiro.localizacao}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Ionicons name="pricetag" size={16} color="#666" />
                  <Text style={styles.pesqueiroValor}>R$ {pesqueiro.valor.toFixed(2)}</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#ccc" />
            </TouchableOpacity>
            <View style={styles.divider} />
          </View>
        ))}
        
        {/* Espaço extra no final para melhor scroll */}
        <View style={styles.espacoFinal} />
      </ScrollView>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 50,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a2a6c',
  },
  headerRight: {
    width: 24,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 20,
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  pesqueiroCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: 'white',
  },
  pesqueiroImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 15,
  },
  pesqueiroImage: {
    width: '100%',
    height: '100%',
  },
  pesqueiroInfo: {
    flex: 1,
  },
  pesqueiroNome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a2a6c',
    marginBottom: 5,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  pesqueiroLocalizacao: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
  pesqueiroValor: {
    fontSize: 14,
    color: '#2ecc71',
    fontWeight: '600',
    marginLeft: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
  },
  espacoFinal: {
    height: 20, // Espaço extra no final do scroll
  },
});