import { expect, test } from '@playwright/test';
import seedData from "$lib/data/seeds.json" assert {type: 'json'};
import { seedToCrop } from "$lib/utils/seedToCrop";

test('about page has expected h1', async ({ page }) => {
	await page.goto('/about');
	expect(await page.textContent('h1')).toBe('About this app');
});

test('seedToCrop', () => {
	const seed = seedData[0];
	const crop = seedToCrop(seed);
	expect(crop).toBeDefined();
	expect(crop.name).toBe(seed.cropProduced);
});
