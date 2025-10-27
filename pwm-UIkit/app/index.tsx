import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Image, TextInput } from "react-native";
import { VStack, HStack, Text, Button, Box, ScrollView, Pressable } from "native-base";

export default function Index() {
  const router = useRouter();
  const [idade, onChangeIdade] = useState("");
  const [showDetails, setShowDetails] = useState(true);
  const anoNasc = new Date().getFullYear() - parseInt(idade);

  return (
    <ScrollView>
      <VStack
        justifyContent="flex-start"
        alignItems="center"
        bg="beige"
        p={4}
        space={4}
      >
        <Text fontSize="4xl" fontWeight="bold" mb={8}>
          Olá Turma!
        </Text>

        <Image
          style={{ width: 150, height: 150, borderRadius: 75 }}
          source={require("@/assets/images/avatar.jpg")}
        />

        <Pressable onPress={() => setShowDetails(!showDetails)}>
          <Text mt={8} fontSize="md" numberOfLines={showDetails ? 0 : 1}>
            Este é um App de exemplo da disciplina Programação Web e Mobile do
            Curso de Ciência da Computação da Universidade Católica de Pernambuco
            (semestre 2025.2)
          </Text>
        </Pressable>

        {!isNaN(anoNasc) && <Text>Você nasceu em {anoNasc}</Text>}

        <TextInput
          style={{
            marginTop: 16,
            height: 45,
            width: 200,
            borderColor: "#841584",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 8,
            fontSize: 16,
          }}
          placeholder="Qual a sua idade?"
          keyboardType="numeric"
          value={idade}
          onChangeText={onChangeIdade}
        />

        <HStack space={4} w={250} justifyContent="space-between" mt={4}>
          <Button onPress={() => Alert.alert("Botão OK pressionado")} bg="#841584">
            OK
          </Button>
          <Button
            variant="outline"
            borderColor="#841584"
            onPress={() => Alert.alert("Botão Cancel pressionado")}
          >
            Cancel
          </Button>
        </HStack>

        <Button mt={4} onPress={() => router.navigate("/taskList")}>
          Ir para Lista de Tarefas
        </Button>

        <Box h={70} />
      </VStack>
    </ScrollView>
  );
}
