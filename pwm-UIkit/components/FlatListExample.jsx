import React from "react";
import { FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Box, Text, VStack, Center } from "native-base";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

(() => {
  for (let i = 4; i < 100; i++) {
    DATA.push({
      id: `id-${i}`,
      title: `Item ${i}`,
    });
  }
})();

const Item = ({ title }) => (
  <Box
    bg="#c6edd1ff"
    p="5"
    my="2"
    mx="4"
    borderRadius="md"
  >
    <Text fontSize="2xl">{title}</Text>
  </Box>
);

export const FlatListExample = () => (
  <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1 }}>
      <VStack flex={1} bg="beige">
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
        />
      </VStack>
    </SafeAreaView>
  </SafeAreaProvider>
);
