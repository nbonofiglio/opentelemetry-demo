import { test, expect } from '@playwright/test';

// GET recommendations
test('recommendations api check', async ({ request }) => {
  const response = await request.get(
    'http://host.docker.internal:8080/api/recommendations?productIds=0PUK6V6EV0%2C0PUK6V6EV0&sessionId=c7fb5383-4a50-4114-9635-fa57f4d2cd6f&currencyCode=USD'
  );

  // Validate response exists and status
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
});

// GET products
test('products api check', async ({ request }) => {
  const response = await request.get(
    'http://host.docker.internal:8080/api/products?currencyCode=USD'
  );

  // Validate response exists and status
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
});