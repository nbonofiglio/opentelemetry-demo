import { test, expect } from '@playwright/test'

// This test is being used as a Browser check
// See browserCheck.testMatch in your checkly.config.ts to configure

test('Visit homepage', async ({ page }) => {
  // The baseURL for Browser checks can be set in the playwrightConfig of your checkly.config.ts
  const response = await page.goto('/')
  expect(response?.status()).toBeLessThan(400)
  await expect(page).toHaveTitle(/Otel Demo - Shop/)
  await page.screenshot({ path: 'homepage.jpg' })
})
