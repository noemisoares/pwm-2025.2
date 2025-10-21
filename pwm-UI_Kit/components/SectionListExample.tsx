// components/SectionListExample.tsx
import { SectionList, Text, Box } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

// Lista de nomes
const names: string[] = [
  "Daisy Lambert", "Mario Cummings", "Nylah Dickerson", "Flynn Costa",
  "Robin Kerr", "Louie Francis", "Daniella Kennedy", "Maxwell Jaramillo",
  "Guadalupe Avila", "Jaylen Morse", "Kairi Roach", "Caspian Crawford",
  "Aubree Hail", "Hector Palacios", "Bria Clay", "Yosef Juarez",
  "Juliet Ponce", "Langston Sanchez", "Aria Person", "Moses Leach",
  "Martha Ruiz", "Austin Vance", "Maxine Bates", "Ellis Wilcox",
  "Ashlyn Santos", "Walker Gilbert", "Jocelyn Phillips", "Andrew Ortiz",
  "Anna Rivers", "Bear Huffman", "Hayley Crosby", "Tristen Cisneros",
  "Janelle Meadows", "Wayne Hampton", "Leona Vang", "Jimmy Oliver",
  "Camille Kramer", "Kylan Cole", "Margaret Brewer", "Cruz Garza",
  "River Marquez", "Malakai McKinney", "Gwendolyn Hahn", "Kabir Jensen",
  "Jane Martin", "Mateo Ramos", "Alice Finley", "Calum Espinoza",
  "Lucille Levy", "Harold Gibbs",
];

// Tipo para seções
type SectionType = { title: string; data: string[] };

// Gerar seções a partir da lista de nomes
const sectionNames: SectionType[] = [];
(() => {
  names.forEach((name) => {
    const firstLetter = name[0];
    let section = sectionNames.find((s) => s.title === firstLetter);
    if (!section) {
      section = { title: firstLetter, data: [] };
      sectionNames.push(section);
    }
    section.data.push(name);
  });

  // Ordenar seções e dados
  sectionNames.sort((a, b) => a.title.localeCompare(b.title));
  sectionNames.forEach((section) => section.data.sort());
})();

export const SectionListExample = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} p={3}>
        <SectionList
          sections={sectionNames}
          keyExtractor={(item: string, index) => item + index}
          renderItem={({ item }: { item: string }) => (
            <Box bg="purple.100" p={4} mb={2} borderRadius="md">
              <Text fontSize="md">{item}</Text>
            </Box>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text fontSize="lg" fontWeight="bold" mt={2}>
              {title}
            </Text>
          )}
        />
      </Box>
    </SafeAreaView>
  );
};
