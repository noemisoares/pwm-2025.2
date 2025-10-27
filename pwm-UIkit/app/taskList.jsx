import { addTask, deleteTask, getTasks, updateTask } from "@/api";
import { CardTask } from "@/components/CardTask";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { FlatList, TextInput } from "react-native";
import { Box, Button, Text, VStack, HStack, Divider } from "native-base";

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

  if (isFetching) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error: {error.message}</Text>;
  }
  if (!data) {
    return <Text>No data available</Text>;
  }

  return (
    <VStack p="4" space="4">
      <Text fontSize="2xl" fontWeight="bold">Task List</Text>

      <HStack space="2">
        <TextInput
          style={{
            flex: 1,
            height: 45,
            borderColor: "#841584",
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 8,
            fontSize: 16,
          }}
          placeholder="Add a task"
          value={description}
          onChangeText={setDescription}
        />
        <Button onPress={() => addMutation.mutate({ description })}>
          Add
        </Button>
      </HStack>

      <Divider bg="gray.400" thickness={1} w="90%" alignSelf="center" my="2" />

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

      {isPending && <Text>Pending...</Text>}
    </VStack>
  );
}
