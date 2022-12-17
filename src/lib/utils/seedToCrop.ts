import cropData from "$lib/data/crops.json";

export const seedToCrop = (seed: any) => {
  return cropData.find(crop => seed.cropProduced === crop.name);
};
