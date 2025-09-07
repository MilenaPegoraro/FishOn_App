import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, StatusBar } from 'react-native';

const CalendarScreen = ({ navigation, route }) => {
  const [currentDate, setCurrentDate] = useState(new Date(2023, 5, 1)); // Junho de 2023 (mês 5)
  
  const daysInMonth = new Date(2023, 6, 0).getDate(); // 30 dias em Junho
  const firstDayOfMonth = new Date(2023, 5, 1).getDay(); // 4 = Quinta-feira (0 = Domingo)
  
  const weekDays = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];
  const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
                     'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  // Gerar os dias do mês
  const renderDays = () => {
    const days = [];
    
    // Dias vazios para o início do mês
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<View key={`empty-${i}`} style={styles.emptyDay} />);
    }
    
    // Dias do mês
    for (let i = 1; i <= daysInMonth; i++) {
      const isToday = i === 1; // Destacar o dia 1 como exemplo
      days.push(
        <TouchableOpacity 
          key={i} 
          style={[styles.day, isToday && styles.currentDay]}
        >
          <Text style={[styles.dayText, isToday && styles.currentDayText]}>{i}</Text>
        </TouchableOpacity>
      );
    }
    
    return days;
  };

  // Função para voltar para TelaGeralPescador
  const handleBack = () => {
    navigation.navigate('TelaGeralPescador');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Cabeçalho com ano e mês */}
      <View style={styles.header}>
        <Text style={styles.year}>2023</Text>
        <Text style={styles.month}>Junho</Text>
      </View>
      
      {/* Dias da semana */}
      <View style={styles.weekDaysContainer}>
        {weekDays.map((day, index) => (
          <View key={index} style={styles.weekDay}>
            <Text style={styles.weekDayText}>{day}</Text>
          </View>
        ))}
      </View>
      
      {/* Grid de dias */}
      <View style={styles.daysContainer}>
        {renderDays()}
      </View>
      
      {/* Botão Voltar - AGORA FUNCIONAL */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={handleBack}
      >
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
      
      {/* Chats abertos */}
      <View style={styles.chatsContainer}>
        <Text style={styles.chatsText}>Chats abertos</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  year: {
    fontSize: 18,
    color: '#888',
  },
  month: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  weekDaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10,
  },
  weekDay: {
    width: 40,
    alignItems: 'center',
  },
  weekDayText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#555',
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  emptyDay: {
    width: '14.28%',
    height: 40,
    marginVertical: 5,
  },
  day: {
    width: '14.28%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  dayText: {
    fontSize: 16,
    color: '#333',
  },
  currentDay: {
    backgroundColor: '#4285F4',
    borderRadius: 20,
  },
  currentDayText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: '#4285F4',
    fontWeight: '500',
  },
  chatsContainer: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  chatsText: {
    fontSize: 16,
    color: '#4285F4',
    fontWeight: '500',
  },
});

export default CalendarScreen;