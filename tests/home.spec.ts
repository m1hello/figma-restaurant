import { test, expect } from "@playwright/test";

const URL = "https://career-links.onrender.com/";

// ── Navbar ──────────────────────────────────────────────────────────────────

test("navbar renders logo and nav links", async ({ page }) => {
  await page.goto(URL);
  await expect(page.locator("text=Cibo gustoso").first()).toBeVisible();
  await expect(page.locator("text=Menu").first()).toBeVisible();
  await expect(page.locator("text=Team").first()).toBeVisible();
  await expect(page.locator("text=Events").first()).toBeVisible();
  await expect(page.locator("text=Contact").first()).toBeVisible();
});

test("mobile menu opens and closes on hamburger click", async ({ page }) => {
  await page.goto(URL);
  const hamburger = page.locator("button[aria-label='Open menu']").first();
  const mobileMenu = page.locator("#mobile-nav-menu").first();
  await expect(hamburger).toBeVisible();
  await hamburger.click();
  await expect(hamburger).toHaveAttribute("aria-expanded", "true");
  await hamburger.click();
  await expect(hamburger).toHaveAttribute("aria-expanded", "false");
});

// ── Who Are We ──────────────────────────────────────────────────────────────

test("who are we section is visible with intro text", async ({ page }) => {
  await page.goto(URL);
  const section = page.locator("section#who-are-we");
  await expect(section).toBeVisible();
  await expect(section.locator("h2.whoAreWeSlogan")).toHaveText("Who are we?");
  await expect(section.locator("p.whoAreWeIntroText")).toBeVisible();
});

test("menu tab list renders all 6 categories", async ({ page }) => {
  await page.goto(URL);
  const tabs = ["Appetizers", "Pasta", "Pizza", "Salads", "Soups", "Desserts"];
  for (const tab of tabs) {
    await expect(
      page.locator(`button#who-are-we-menu-tab-${tab.toLowerCase()}`)
    ).toBeVisible();
  }
});

test("Pasta tab is selected by default", async ({ page }) => {
  await page.goto(URL);
  const pastaTab = page.locator("button#who-are-we-menu-tab-pasta");
  await expect(pastaTab).toHaveAttribute("aria-selected", "true");
});

test("switching menu tabs updates aria-selected", async ({ page }) => {
  await page.goto(URL);
  const pizzaTab = page.locator("button#who-are-we-menu-tab-pizza");
  await pizzaTab.click();
  await expect(pizzaTab).toHaveAttribute("aria-selected", "true");
  await expect(
    page.locator("button#who-are-we-menu-tab-pasta")
  ).toHaveAttribute("aria-selected", "false");
});

test("gallery scroll buttons are visible", async ({ page }) => {
  await page.goto(URL);
  await expect(page.locator("button[aria-label='Scroll gallery left']")).toBeVisible();
  await expect(page.locator("button[aria-label='Scroll gallery right']")).toBeVisible();
});

test("drink selector shows Wine, Cocktails, Beer options", async ({ page }) => {
  await page.goto(URL);
  const drinksArea = page.locator("[aria-label='Drink categories']");
  await expect(drinksArea).toBeVisible();
  await expect(drinksArea.locator("button[aria-label='Select wine image']")).toBeVisible();
  await expect(drinksArea.locator("button[aria-label='Select cocktails image']")).toBeVisible();
  await expect(drinksArea.locator("button[aria-label='Select beer image']")).toBeVisible();
});

test("cocktail navigation buttons are visible", async ({ page }) => {
  await page.goto(URL);
  await expect(page.locator("button[aria-label='Cocktail previous']")).toBeVisible();
  await expect(page.locator("button[aria-label='Cocktail next']")).toBeVisible();
});

// ── Our Team ─────────────────────────────────────────────────────────────────

test("our team section renders all 4 members", async ({ page }) => {
  await page.goto(URL);
  const section = page.locator("section#our-team");
  await expect(section).toBeVisible();
  const members = ["Johnathan Demario", "Bryan Machado", "Adam Joseph", "Putin Desque"];
  for (const name of members) {
    await expect(section.locator(`text=${name}`)).toBeVisible();
  }
});

test("our team member roles are visible", async ({ page }) => {
  await page.goto(URL);
  const section = page.locator("section#our-team");
  await expect(section.locator("p.ourTeamMemberRole")).toHaveText("Founder");
  await expect(section.locator("p.ourTeamMemberRoleSecond")).toHaveText("Chef");
});

// ── Events ───────────────────────────────────────────────────────────────────

test("events section is visible with heading", async ({ page }) => {
  await page.goto(URL);
  const section = page.locator("section#events");
  await expect(section).toBeVisible();
  await expect(section.locator("h2.eventsHeading")).toHaveText("Events");
});

test("events grid renders 4 event cards", async ({ page }) => {
  await page.goto(URL);
  const grid = page.locator(".eventsGrid");
  await expect(grid.locator(".eventCard")).toHaveCount(4);
});

test("featured event card shows Corporate Events title", async ({ page }) => {
  await page.goto(URL);
  const featured = page.locator(".eventCardFeatured");
  await expect(featured).toBeVisible();
  await expect(featured.locator("p.eventTitle")).toHaveText("Corporate Events");
});

// ── Footer ───────────────────────────────────────────────────────────────────

test("footer renders navigation links", async ({ page }) => {
  await page.goto(URL);
  const footer = page.locator("footer#footer");
  await expect(footer).toBeVisible();
  for (const link of ["Menu", "Team", "Events", "Contact"]) {
    await expect(footer.locator(`text=${link}`)).toBeVisible();
  }
});

test("footer renders social media icons", async ({ page }) => {
  await page.goto(URL);
  const social = page.locator("[aria-label='Social links']");
  await expect(social).toBeVisible();
  await expect(social.locator("[aria-label='Facebook']")).toBeVisible();
  await expect(social.locator("[aria-label='Instagram']")).toBeVisible();
  await expect(social.locator("[aria-label='Twitter']")).toBeVisible();
  await expect(social.locator("[aria-label='YouTube']")).toBeVisible();
});

test("footer shows newsletter signup label", async ({ page }) => {
  await page.goto(URL);
  const footer = page.locator("footer#footer");
  await expect(footer.locator("text=Sign up to our newsletter")).toBeVisible();
});

test("page title is Cibo gustoso", async ({ page }) => {
  await page.goto(URL);
  await expect(page).toHaveTitle("Cibo gustoso");
});

test("hero heading is visible", async ({ page }) => {
  await page.goto(URL);
  const hero = page.locator("h1.heroTitle");
  await expect(hero).toBeVisible();
  await expect(hero).toHaveText("Made by Italians. Enjoyed by Everyone.");
});

test("menu section renders restaurant items", async ({ page }) => {
  await page.goto(URL);

  // Menu heading is present
  const menuHeading = page.locator("h2#who-are-we-menu");
  await expect(menuHeading).toBeVisible();
  await expect(menuHeading).toHaveText("Menu");

  // Click the Pizza tab
  const pizzaTab = page.locator("button#who-are-we-menu-tab-pizza");
  await pizzaTab.click();

  // Pizza panel is rendered
  const pizzaPanel = page.locator("[aria-label='Pizza items']");
  await expect(pizzaPanel).toBeVisible();

  const pizzaItems = [
    { title: "Mediterranean pizza", price: "$30" },
    { title: "Pesto Veggie Pizza", price: "$34" },
    { title: "Classic Veggie Pizza", price: "$40" },
    { title: "Margherita Pizza", price: "$35" },
  ];

  for (const item of pizzaItems) {
    await expect(
      pizzaPanel.locator("p.whoAreWeMenuFramePizzaTitle", { hasText: item.title })
    ).toBeVisible();
    await expect(
      pizzaPanel.locator("p.whoAreWeMenuFramePizzaPrice", { hasText: item.price })
    ).toBeVisible();
  }
});
