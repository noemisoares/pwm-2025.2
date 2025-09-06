const characteres = [
  { title: "Ragatha", isAnimal: false, id: 1 },
  { title: "Jax", isAnimal: true, id: 2 },
  { title: "Pomni", isAnimal: false, id: 3 },
  { title: "Gummigoo", isAnimal: true, id: 4 },
];

function  Character({ product: character }) {
  return (
    <li
      style={{
        color: character.isAnimal ? "blue" : "red",
      }}
    >
      {character.title}
    </li>
  );
}

export function List() {
  // const filteredCharacters = characteres.filter((product) => character.isAnimal);
  const listItems = characteres.map((character) => (
    <Character key={character.id} product={character} />
  ));

  return <ul>{listItems}</ul>;
}