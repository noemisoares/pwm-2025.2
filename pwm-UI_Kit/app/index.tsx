import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Input,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { Alert } from "react-native";

export default function Index() {
  const router = useRouter();
  const [idade, setIdade] = useState("");
  const [showDetails, setShowDetails] = useState(true);
  const anoNasc = new Date().getFullYear() - parseInt(idade);

  return (
    <ScrollView>
      <Center bg="beige" flex={1} p={4}>
        <Heading fontSize="4xl" mb={6}>
          Olá Turma!
        </Heading>

        <Image
          source={require("@/assets/images/avatar.jpg")}
          alt="Avatar"
          size={150}
          borderRadius={999}
          mb={4}
        />

        <Pressable onPress={() => setShowDetails(!showDetails)}>
          <Text fontSize="md" mt={4} textAlign="center">
            {showDetails
              ? "Este é um App de exemplo da disciplina Programação Web e Mobile do Curso de Ciência da Computação da Universidade Católica de Pernambuco (semestre 2025.2)"
              : "Toque para ver mais..."}
          </Text>
        </Pressable>

        {!isNaN(anoNasc) && (
          <Text mt={3} fontWeight="medium">
            Você nasceu em {anoNasc}
          </Text>
        )}

        <Input
          mt={4}
          placeholder="Qual a sua idade?"
          value={idade}
          onChangeText={setIdade}
          keyboardType="numeric"
          w="60%"
          h={45}
          borderColor="gray.400"
        />

        <HStack mt={5} space={3}>
          <Button
            colorScheme="purple"
            onPress={() => Alert.alert("Botão OK pressionado")}
          >
            OK
          </Button>
          <Button
            colorScheme="purple"
            variant="outline"
            onPress={() => Alert.alert("Botão Cancel pressionado")}
          >
            Cancelar
          </Button>
        </HStack>

        <Button
          mt={6}
          colorScheme="purple"
          onPress={() => router.navigate("/taskList")}
        >
          Ir para Lista de Tarefas
        </Button>

        <Box h={16} />
      </Center>
    </ScrollView>
  );
}
