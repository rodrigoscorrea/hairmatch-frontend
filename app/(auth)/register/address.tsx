import React from 'react';
import { View, Text, Alert, TextInput, TouchableOpacity, KeyboardAvoidingView, Image, ScrollView } from 'react-native';
import { styles } from '../../../styles/register/styles/AdressStyle'
import { ErrorModal } from '@/app/../components/modals/ErrorModal/ErrorModal';
import { useAddress } from '@/hooks/authHooks/useAddress';
import { formatCEP } from '@/app/../utils/forms';
import { useRegistration } from '@/contexts/RegistrationContext';

export default function Address() {
  const { registrationData, setRegistrationData } = useRegistration();
  const {
    handleInputChange,
    errors,
    errorModal,
    closeErrorModal,
    handleNext,
    handleGoBack,
  } = useAddress();

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} > 
      <ScrollView contentContainerStyle={styles.container}> 
        <View style={styles.header}>
          <Image source={require('../../../assets/images/HairmatchLogo.png')} />
          <Text style={styles.subtitle}>Informe seu endereço</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.row}>
            <TextInput
              placeholder="Endereço"
              style={[styles.input, { flex: 2, marginRight: 5 }, errors.address && styles.inputError]}
              value={registrationData.address}
              onChangeText={text => handleInputChange('address', text)}
            />
            <TextInput
              placeholder="Número"
              style={[styles.input, { flex: 1 }, errors.number && styles.inputError]}
              value={registrationData.number}
              onChangeText={text => handleInputChange('number', text)}
              keyboardType="numeric"
            />
          </View>
          <TextInput
            placeholder="Complemento"
            style={styles.input}
            value={registrationData.complement}
            onChangeText={text => handleInputChange('complement', text)}
          />
          <View style={styles.row}>
            <TextInput
              placeholder="Bairro"
              style={[styles.input, { flex: 1, marginRight: 5 }, errors.neighborhood && styles.inputError]}
              value={registrationData.neighborhood}
              onChangeText={text => handleInputChange('neighborhood', text)}
            />
            <TextInput
              placeholder="CEP"
              style={[styles.input, { flex: 1 }, errors.postal_code && styles.inputError]}
              value={registrationData.postal_code}
              onChangeText={(text) => handleInputChange('postal_code', formatCEP(text))}
              keyboardType="numeric"
              maxLength={9}
            />
          </View>
          <View style={styles.row}>
            <TextInput
              placeholder="Cidade"
              style={[styles.input, { flex: 2, marginRight: 5 }, errors.city && styles.inputError]}
              value={registrationData.city}
              onChangeText={text => handleInputChange('city', text)}
            />
            <TextInput
              placeholder="UF"
              style={[styles.input, { flex: 1 }, errors.state && styles.inputError]}
              value={registrationData.state}
              onChangeText={text => handleInputChange('state', text)}
              maxLength={2}
              autoCapitalize="characters"
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
              <Text style={styles.backButtonText}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleNext}>
              <Text style={styles.buttonText}>Próximo</Text>
            </TouchableOpacity>
          </View>
          <ErrorModal
            visible={errorModal.visible}
            onClose={closeErrorModal}
            message={errorModal.message}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );

}

