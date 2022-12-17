import seedData from "$lib/data/seeds.json";

export const cropToSeed = (crop: any) => {
  seedData.find(seed => crop.name === seed.cropProduced);
};
