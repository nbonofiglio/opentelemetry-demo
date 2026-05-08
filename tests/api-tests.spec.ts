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

// GET new deck of cards
test('deck of cards new deck api check', async ({ request }) => {
  const response = await request.get('https://deckofcardsapi.com/api/deck/new/');

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.success).toBe(true);
  expect(body.deck_id).toBeTruthy();
  expect(body.remaining).toBe(52);
});