import { useRouter } from "expo-router";
import { useState } from "react";

import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
// import { FlatListExample } from "@/components/FlatListExample";
import { SectionListExample } from "@/components/SectionListExample";

export default function Index() {
  const router = useRouter();
  const [idade, onChangeIdade] = useState("");
  const anoNasc = new Date().getFullYear() - parseInt(idade);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Olá Turma!</Text>
      <Image
        style={styles.avatar}
        source={require("@/assets/images/avatar.jpg")}
        resizeMode="cover"
      />
      <Text style={styles.text}>
        Este é um App de exemplo da disciplina Programação Web e Mobile do Curso
        de Ciência da Computação da Universidade Católica de Pernambuco
        (semestre 2025.2)
      </Text>
      {!isNaN(anoNasc) && <Text>Você nasceu em {anoNasc}</Text>}
      <TextInput
        style={styles.input}
        onChangeText={onChangeIdade}
        value={idade}
        placeholder="Qual a sua idade?"
        keyboardType="numeric"
        placeholderTextColor={"#e2e2e2ff"}
      />
      <View style={styles.buttonsContainer}>
        <Button
          onPress={() => Alert.alert("Botão OK pressionado")}
          title="     OK     "
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => Alert.alert("Botão Cancel pressionado")}
          title="Cancel"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <Button
        title="Ir para Lista de Tarefas"
        color="#841584"
        onPress={() => router.push("/taskList")}
      />
      <View style={styles.space} />
    </ScrollView>
  );
}

// Exemplos de Listas
function App() {
  // return <FlatListExample />;
  return <SectionListExample />;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#6a296aff",
    padding: 15,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#e2e2e2ff",
  },
  avatar: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  text: {
    fontSize: 16,
    marginTop: 30,
    color: "#e2e2e2ff",
  },
  input: {
    height: 45,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#e2e2e2ff",
  },
  space: {
    height: 70,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 250,
  },
});