import { Box, HStack, Text, Switch, IconButton, Icon } from "native-base"; 
import { MaterialIcons } from "@expo/vector-icons";

export function CardTask({ task, onDelete, onCheck }) {
  return (
    <Box
      p="3"
      mb="2"
      borderRadius="lg"
      borderWidth="1"
      borderColor={task.done ? "green" : "purple"}
      bg={task.done ? "#DFFFD6" : "white"}
    >
      <HStack alignItems="center" justifyContent="space-between">
        <HStack alignItems="center" space="3">
          <Switch
            isChecked={task.done}
            onToggle={() => onCheck(task)}
            size="md"
            onTrackColor="#841584"
            offTrackColor="#767577"
          />
          <Text strikeThrough={task.done} color={task.done ? "gray" : "black"}>
            {task.description}
          </Text>
        </HStack>

        <IconButton
          icon={<Icon as={MaterialIcons} name="delete" color="red" />}
          onPress={() => onDelete(task.objectId)}
          borderRadius="full"
          _pressed={{ bg: "#FFCCCC" }}
        />
      </HStack>
    </Box>
  );
}
