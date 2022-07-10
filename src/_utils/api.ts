export const apiPerName = async (pokemon: string) => {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await resp.json();
  return data;
};

export const api = async () => {
  const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await resp.json();
  return data;
};

export const apiPerId = async (id: string) => {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await resp.json();
  return data;
};

export const apiPerRegion = async (region: number) => {
    const resp = await fetch(`https://pokeapi.co/api/v2/generation/${region+1}`);
    const data = await resp.json();
    return data.pokemon_species;

};




//generation/1
//https://pokeapi.co/api/v2/pokemon?limit=151
