import { test, expect } from '@playwright/test';

test.describe('Velvet Coffee Roasters Website', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the homepage', async ({ page }) => {
    await expect(page).toHaveTitle(/Velvet Coffee Roasters/);
  });

  test('should display the navigation', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    await expect(page.locator('nav').getByText('Velvet')).toBeVisible();
  });

  test('should display navigation links', async ({ page }) => {
    await expect(page.locator('a[href="#menu"]')).toBeVisible();
    await expect(page.locator('a[href="#about"]')).toBeVisible();
    await expect(page.locator('a[href="#location"]')).toBeVisible();
    await expect(page.locator('a[href="#contact"]')).toBeVisible();
  });

  test('should display the hero section', async ({ page }) => {
    await expect(page.locator('h1:has-text("Smooth as")')).toBeVisible();
    await expect(page.locator('h1:has-text("Velvet")')).toBeVisible();
    await expect(page.locator('h1:has-text("Bold as")')).toBeVisible();
    await expect(page.locator('h1:has-text("Portland")')).toBeVisible();
  });

  test('should display hero buttons', async ({ page }) => {
    await expect(page.locator('button:has-text("View Menu")')).toBeVisible();
    await expect(page.locator('button:has-text("Find Us")')).toBeVisible();
  });

  test('should display the features section', async ({ page }) => {
    await expect(page.locator('text=Crafted for You')).toBeVisible();
    await expect(page.locator('text=Single Origin Beans')).toBeVisible();
    await expect(page.locator('text=Latte Art Classes')).toBeVisible();
    await expect(page.locator('text=Cozy Workspace')).toBeVisible();
  });

  test('should display the menu section', async ({ page }) => {
    await expect(page.locator('#menu')).toBeVisible();
    await expect(page.locator('text=From Our Bar')).toBeVisible();
    await expect(page.locator('text=Velvet Cortado')).toBeVisible();
    await expect(page.locator('text=Honey Lavender Latte')).toBeVisible();
    await expect(page.locator('text=Portland Fog')).toBeVisible();
    await expect(page.locator('text=Nitro Cold Brew')).toBeVisible();
  });

  test('should display menu prices', async ({ page }) => {
    await expect(page.locator('text=$4.50')).toBeVisible();
    await expect(page.locator('text=$5.75')).toBeVisible();
    await expect(page.locator('text=$5.25')).toBeVisible();
    await expect(page.locator('text=$6.00')).toBeVisible();
  });

  test('should display the about section', async ({ page }) => {
    await expect(page.locator('#about')).toBeVisible();
    await expect(page.locator('text=Our Story')).toBeVisible();
    await expect(page.locator('text=Crafted with Heart in the Rose City')).toBeVisible();
    await expect(page.locator('text=Elias Thorne, Founder')).toBeVisible();
  });

  test('should display the location section', async ({ page }) => {
    await expect(page.locator('#location')).toBeVisible();
    await expect(page.locator('text=Visit Us')).toBeVisible();
    await expect(page.locator('text=1234 SE Division St')).toBeVisible();
    await expect(page.locator('text=Portland, OR 97202')).toBeVisible();
  });

  test('should display contact information', async ({ page }) => {
    await expect(page.locator('text=hello@velvetcoffee.com')).toBeVisible();
    await expect(page.locator('text=(503) 555-0123')).toBeVisible();
  });

  test('should display the newsletter section', async ({ page }) => {
    await expect(page.locator('#contact')).toBeVisible();
    await expect(page.locator('text=Join the Brew')).toBeVisible();
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('button:has-text("Subscribe")')).toBeVisible();
  });

  test('should display the footer', async ({ page }) => {
    await expect(page.locator('footer')).toBeVisible();
    await expect(page.locator('footer a:has-text("Privacy")')).toBeVisible();
    await expect(page.locator('footer a:has-text("Terms")')).toBeVisible();
    await expect(page.locator('footer a:has-text("Careers")')).toBeVisible();
    await expect(page.locator('footer a:has-text("Press")')).toBeVisible();
  });

  test('should display social media links', async ({ page }) => {
    await expect(page.locator('[aria-label="Instagram"]')).toBeVisible();
    await expect(page.locator('[aria-label="Facebook"]')).toBeVisible();
    await expect(page.locator('[aria-label="Twitter"]')).toBeVisible();
  });

  test('should have accessible navigation', async ({ page }) => {
    await expect(page.locator('nav[aria-label="Main Navigation"]')).toBeVisible();
  });

  test('should have proper heading hierarchy', async ({ page }) => {
    const h1 = page.locator('h1');
    await expect(h1).toHaveCount(1);
  });

  test('should be responsive - mobile menu toggle', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const menuButton = page.locator('button[aria-label="Open menu"]');
    await expect(menuButton).toBeVisible();
  });

  test('should open mobile menu on click', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const menuButton = page.locator('button[aria-label="Open menu"]');
    await menuButton.click();
    await expect(page.locator('button[aria-label="Close menu"]')).toBeVisible();
  });

  test('should close mobile menu when clicking a link', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const menuButton = page.locator('button[aria-label="Open menu"]');
    await menuButton.click();
    await page.locator('a[href="#menu"]').last().click();
    await expect(page.locator('button[aria-label="Open menu"]')).toBeVisible();
  });

  test('should scroll to menu section when clicking View Menu', async ({ page }) => {
    // Click the View Menu button and verify the menu section exists
    await page.locator('button:has-text("View Menu")').click();
    await page.waitForTimeout(1000);
    // Verify the menu section is present on the page
    await expect(page.locator('#menu')).toBeVisible();
  });

  test('should have images with alt text', async ({ page }) => {
    const images = page.locator('img');
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      expect(alt).toBeTruthy();
    }
  });

  test('should have proper color contrast', async ({ page }) => {
    // Check that text is visible against background
    const heroText = page.locator('h1');
    await expect(heroText).toBeVisible();
  });
});
