import seedData from "$lib/data/seeds.json";
import { seedToCrop } from "$lib/utils/seedToCrop";

export const maximizeCropProfit = (season: string, day: number, farmSize: number, grilla: number) => {
  // TODO: add in filtering by different crop biomes

  const DAYS_PER_SEASON = 30;
  const seedsMatchingSeason = seedData.map(seed => seed.farmableSeasons.includes(season));
  const daysRemainingInSeason: number = DAYS_PER_SEASON - day;

  const seedyBois = seedsMatchingSeason.map((seed: any) => {
    const daysUntilFirstYield = daysRemainingInSeason - seed.daysToMature;
    const remainingDays = daysRemainingInSeason - daysUntilFirstYield;
    if (seed.reharvestable) {
      const extraYields = Math.floor(remainingDays / (seed.harvestsPerSeed * seed.daysToGrow));

      // is it worth planting a second time?
    } else {
      const numberOfSeedsToReplant = remainingDays / seed.daysToMature;
      const moola = seed.price * (numberOfSeedsToReplant + 1);
    }
    // (crop.sellPrice * farmSize) - (seed.price * farmSize)

  });
};

const oneTimeSeedProfit = (seed: any): number => {
  const crop = seedToCrop(seed);
  if (!crop) {
    console.error(`Crop not found for seed ${seed.name}!`);
    return 0;
  } else {
    return crop.sellPrice - seed.price;
  }
};

const repeatableSeedProfit = (seed: any, currentDayInSeason: number, daysRemainingInSeason: number): number => {
  if (currentDayInSeason < daysRemainingInSeason) {

  }
  return 0;
};

// repeatable
// xxxxx
// hxhxh 1 2 3
// xhxhx 4 5
// hxhxh 6 7 8
// xhxhx 9 10
// hxhxh 11 12 13
