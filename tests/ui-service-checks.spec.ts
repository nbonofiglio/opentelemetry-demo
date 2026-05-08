import { test, expect } from '@playwright/test';

test('checkout flow test', async ({ page }) => {
  await page.goto('http://host.docker.internal:8080/');
  await page.getByRole('button', { name: 'Go Shopping' }).click();
  await page.getByRole('link', { name: 'Solar System Color Imager $' }).click();
  await page.getByRole('button', { name: 'cart Add To Cart' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByRole('heading', { name: 'Your order is complete!' }).click();
  await expect(page.locator('h1')).toContainText('Your order is complete!');
});