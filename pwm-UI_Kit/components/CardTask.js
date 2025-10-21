import { Box, Button, HStack, Switch, Text } from "native-base";

export function CardTask({ task, onDelete, onCheck }) {
  return (
    <Box
      p={3}
      mb={3}
      bg="gray.100"
      borderRadius="md"
      shadow={1}
      w="100%"
    >
      <HStack alignItems="center" justifyContent="space-between">
        <Text flex={1} fontSize="md">
          {task.description}
        </Text>

        <Switch
          isChecked={task.done}
          onToggle={() => onCheck(task)}
          offTrackColor="gray.300"
          onTrackColor="purple.300"
          offThumbColor="gray.100"
          onThumbColor="yellow.400"
        />

        <Button
          ml={2}
          colorScheme="red"
          size="sm"
          onPress={() => onDelete(task.objectId)}
        >
          X
        </Button>
      </HStack>
    </Box>
  );
}
