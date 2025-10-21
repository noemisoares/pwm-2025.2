import { addTask, deleteTask, getTasks, updateTask } from "@/api";
import { CardTask } from "@/components/CardTask";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import {
  Box,
  Button,
  FlatList,
  HStack,
  Input,
  Spinner,
  Text,
  VStack,
} from "native-base";

export default function TaskList() {
  const [description, setDescription] = useState("");
  const queryClient = useQueryClient();

  const { data, isFetching, error, isPending } = useQuery({
    queryKey: ["todos"],
    queryFn: getTasks,
  });

  const addMutation = useMutation({
    mutationFn: addTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      setDescription("");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  if (isFetching) return <Spinner mt={10} size="lg" color="purple.500" />;
  if (error) return <Text color="red.500">Erro: {error.message}</Text>;
  if (!data) return <Text>Nenhuma tarefa encontrada.</Text>;

  return (
    <VStack flex={1} p={5} space={4}>
      <Text fontSize="2xl" fontWeight="bold">
        Task List
      </Text>

      <HStack space={3} alignItems="center">
        <Input
          flex={1}
          placeholder="Adicionar uma tarefa"
          value={description}
          onChangeText={setDescription}
        />
        <Button
          colorScheme="purple"
          onPress={() => addMutation.mutate({ description })}
        >
          Adicionar
        </Button>
      </HStack>

      <Box
        mt={2}
        bg="gray.400"
        h="1px"
        alignSelf="center"
        w="90%"
        borderRadius="md"
      />

      <FlatList
        data={data.results}
        keyExtractor={(item) => item.objectId}
        renderItem={({ item: task }) => (
          <CardTask
            key={task.objectId}
            task={task}
            onDelete={deleteMutation.mutate}
            onCheck={updateMutation.mutate}
          />
        )}
      />

      {isPending && (
        <Text alignSelf="center" mt={2} color="gray.500">
          Atualizando...
        </Text>
      )}
    </VStack>
  );
}
