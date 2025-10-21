// components/FlatListExample.jsx
import React from "react";
import { FlatList, Box, Text } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

const DATA = Array.from({ length: 100 }, (_, i) => ({
  id: `id-${i + 1}`,
  title: `Item ${i + 1}`,
}));

const Item = ({ title }: { title: string }) => (
  <Box bg="green.100" p={4} mb={2} mx={2} borderRadius="md">
    <Text fontSize="lg">{title}</Text>
  </Box>
);

export const FlatListExample = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <FlatList
      data={DATA}
      renderItem={({ item }) => <Item title={item.title} />}
      keyExtractor={(item) => item.id}
    />
  </SafeAreaView>
);
