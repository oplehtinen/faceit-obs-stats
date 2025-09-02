import { test, expect } from '@playwright/test';

// Predefined match id from the request
const MATCH_ID = '1-58d8dbd0-dc69-4077-9970-7893f3fc07dc';

test('capture mappicks screenshot', async ({ page }) => {
    // Use the view route that accepts query params and set mock=true for reliability
    const url = `/view/mappicks?id=${encodeURIComponent(MATCH_ID)}`;
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    // Wait for the MapCard elements to appear (from MapPicks component)
    const mapCard = page.locator('.card.image-full');
    await expect(mapCard.first()).toBeVisible({ timeout: 15_000 });

    // Give transitions a brief moment to finish for a clean shot
    await page.waitForTimeout(500);

    // Ensure the layout has loaded and no skeletons
    await expect(page.locator('.skeleton')).toHaveCount(0);

    // Take a full-page screenshot and save it into static so it can be served
    await page.screenshot({ path: 'static/mappicks-sample.png', fullPage: true });
});
