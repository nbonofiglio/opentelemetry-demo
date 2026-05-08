import { test, expect } from '@playwright/test'

// Browser check: validates that the currency selector on the homepage works correctly.
// Runs against localhost:8080 — requires a Checkly Private Location with access to the local Docker Desktop network.

test('Change currency and validate prices update', async ({ page }) => {
  await page.goto('http://localhost:8080/')
  await expect(page).toHaveTitle(/Astronomy Shop/)

  // Grab a product price before changing currency to use as a baseline
  const firstPrice = page.locator('[data-cy="product-price"], .product-price, .price').first()

  // The currency selector is a <select> in the top navbar
  const currencySelect = page.locator('select[name="currency_code"]')
  await expect(currencySelect).toBeVisible()

  // Confirm the default currency is USD
  await expect(currencySelect).toHaveValue('USD')

  // Change to EUR
  await currencySelect.selectOption('EUR')

  // The page reloads / updates after the form is submitted — wait for navigation
  await page.waitForLoadState('networkidle')

  // Validate the selector now reflects EUR
  await expect(currencySelect).toHaveValue('EUR')

  // Validate at least one price on the page is displayed in EUR (€ symbol)
  const priceLocator = page.locator('text=/€\\d/')
  await expect(priceLocator.first()).toBeVisible()

  await page.screenshot({ path: 'currency-change.jpg' })
})
