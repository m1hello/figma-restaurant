"use client";

import { type KeyboardEvent, useEffect, useState } from "react";
import Navbar, { CartWidget, type CartItem } from "./Navbar";
import Image from "next/image";

const pastaItems = [
  { id: "gnocchi", name: "Gnocchi with almonds", price: 10, frameClass: "whoAreWeMenuFrame9" },
  { id: "ravioli", name: "Mini spinach ravioli", price: 12, frameClass: "whoAreWeMenuFrame11" },
  { id: "lasagna", name: "Lasagna", price: 9, frameClass: "whoAreWeMenuFrame10" },
  { id: "carbonara", name: "Carbonara spaghetti", price: 13, frameClass: "whoAreWeMenuFrame12" },
];

// Maps pasta item id to Lemon Squeezy variant name (must match your LS dashboard)
const VARIANT_NAME_MAP: Record<string, string> = {
  gnocchi: "Gnocchi with almonds",
  ravioli: "Mini spinach ravioli",
  lasagna: "Lasagna",
  carbonara: "Carbonara spaghetti",
};

const CART_STORAGE_KEY = "cibo-gustoso-cart";

export default function WhoAreWe() {
  const [galleryDirection, setGalleryDirection] = useState<"left" | "right">("left");
  const wineVideoSrc = "/Who%20are%20we/Cocktails/animate%20wine.mp4";
  const beerVideoSrc = "/Who%20are%20we/Cocktails/Beer%20animation.mp4";
  const cocktailVideoSrc = "/Who%20are%20we/Cocktails/Cocktail%20animation.mp4";
  const [selectedMenu, setSelectedMenu] = useState("Pasta");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [variantIds, setVariantIds] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch("/api/variants")
      .then((r) => r.json())
      .then(({ variants }) => {
        const map: Record<string, string> = {};
        for (const [itemId, variantName] of Object.entries(VARIANT_NAME_MAP)) {
          const match = variants.find((v: { id: string; name: string }) => v.name === variantName);
          if (match) map[itemId] = match.id;
        }
        setVariantIds(map);
      })
      .catch(() => {});
  }, []);
  const [selectedDrinkImageSrc, setSelectedDrinkImageSrc] = useState(cocktailVideoSrc);
  const isWineSelected = selectedDrinkImageSrc.includes("animate%20wine.mp4");
  const isBeerSelected = selectedDrinkImageSrc.includes("Beer%20animation.mp4");
  const isCocktailSelected = selectedDrinkImageSrc.includes("Cocktail%20animation.mp4");
  const isVideoSelected = isBeerSelected || isCocktailSelected || isWineSelected;
  const menuCategories = ["Appetizers", "Pasta", "Pizza", "Salads", "Soups", "Desserts"];
  const menuPanelId = `who-are-we-menu-panel-${selectedMenu.toLowerCase()}`;

  useEffect(() => {
    try {
      const savedCart = window.localStorage.getItem(CART_STORAGE_KEY);
      const parsedCart: unknown = savedCart ? JSON.parse(savedCart) : [];
      setCart(Array.isArray(parsedCart) ? (parsedCart as CartItem[]) : []);
    } catch {
      window.localStorage.removeItem(CART_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart((previousCart) => {
      const existingItem = previousCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return previousCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }
      return [...previousCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((previousCart) =>
      previousCart
        .map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem,
        )
        .filter((cartItem) => cartItem.quantity > 0),
    );
  };

  const handleMenuTabsKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = menuCategories.indexOf(selectedMenu);
    if (currentIndex === -1) return;

    if (event.key === "ArrowRight") {
      event.preventDefault();
      const nextIndex = (currentIndex + 1) % menuCategories.length;
      setSelectedMenu(menuCategories[nextIndex]);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      const prevIndex = (currentIndex - 1 + menuCategories.length) % menuCategories.length;
      setSelectedMenu(menuCategories[prevIndex]);
    }
  };

  return (
    <section id="who-are-we" className="whoAreWeSection" aria-label="Who are we">
      <div className="whoAreWeInner">
        <Navbar
          variant="light"
          cart={cart}
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
        />
        <h2 className="whoAreWeSlogan">Who are we?</h2>
        <p className="whoAreWeIntroText">
          Vulputate in elit tincidunt elit scelerisque massa fusce pharetra. Sagittis
          gravida lacus quisque dictum non pretium suspendisse porttitor. Risus
          adipiscing semper ornare velit. Sagittis consequat luctus leo arcu. Aenean
          nunc accumsan id maecenas. Tortor urna cum platea vitae.
        </p>
        <button
          className="whoAreWeArrowBtn"
          type="button"
          aria-label="Scroll gallery left"
          onClick={() => setGalleryDirection("left")}
        >
          <Image
            className="whoAreWeArrowIcon"
            src="/Who%20are%20we/long-thin-arrow-icon.svg"
            alt=""
            width={20}
            height={8}
          />
        </button>
        <button
          className="whoAreWeArrowBtnRight"
          type="button"
          aria-label="Scroll gallery right"
          onClick={() => setGalleryDirection("right")}
        >
          <Image
            className="whoAreWeArrowIcon"
            src="/Who%20are%20we/right-thin-arrow-icon.svg"
            alt=""
            width={20}
            height={8}
          />
        </button>
        <div className="whoAreWeGallery" aria-label="Who are we gallery">
          <div
            className={`whoAreWeGalleryTrack ${
              galleryDirection === "right"
                ? "whoAreWeGalleryTrackRight"
                : "whoAreWeGalleryTrackLeft"
            }`}
            aria-hidden="true"
          >
            <div className="whoAreWeInteriorImage1" />
            <div className="whoAreWeInteriorImage2" />
            <div className="whoAreWeInteriorImage3" />
            <div className="whoAreWeInteriorImage4" />
            <div className="whoAreWeInteriorImage1" />
            <div className="whoAreWeInteriorImage2" />
            <div className="whoAreWeInteriorImage3" />
            <div className="whoAreWeInteriorImage4" />
          </div>
        </div>
        <h2 id="who-are-we-menu" className="whoAreWeMenuSlogan">
          Menu
        </h2>
        <p className="whoAreWeMenuText">
          Lacus lobortis nullam nam consectetur fermentum mattis pellentesque id nulla.
          Risus convallis iaculis risus ac aliquam sit ultricies. Adipiscing adipiscing
          pellentesque tincidunt vitae. Aliquam dolor egestas nam congue elit dolor.
        </p>
        <div
          className="whoAreWeMenuChips"
          role="tablist"
          aria-label="Menu categories"
          onKeyDown={handleMenuTabsKeyDown}
        >
          {menuCategories.map((category) => {
            const isSelected = selectedMenu === category;
            const categoryClass = `whoAreWeMenuChip${category}`;
            return (
              <button
                key={category}
                id={`who-are-we-menu-tab-${category.toLowerCase()}`}
                className={`whoAreWeMenuChip ${categoryClass} ${isSelected ? "whoAreWeMenuChipActive" : ""}`}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls={`who-are-we-menu-panel-${category.toLowerCase()}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setSelectedMenu(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
        {selectedMenu === "Pasta" && (
          <div
            id={menuPanelId}
            className="whoAreWeMenuFrames whoAreWeMenuFramesPasta"
            role="tabpanel"
            aria-labelledby={`who-are-we-menu-tab-${selectedMenu.toLowerCase()}`}
          >
            {pastaItems.map((item) => {
              const cartItemCount = cart.find((cartItem) => cartItem.id === item.id)?.quantity ?? 0;
              return (
                <div className="whoAreWeMenuPastaCard" key={item.id}>
                  <div className={`whoAreWeMenuFrame ${item.frameClass}`} aria-hidden="true" />
                  <div className="whoAreWeMenuPastaControls" aria-label={`${item.name} controls`}>
                    <button
                      className="whoAreWeMenuControlButton"
                      type="button"
                      aria-label={`Remove one ${item.name} from cart`}
                      disabled={cartItemCount === 0}
                      onClick={() => removeFromCart(item.id)}
                    >
                      −
                    </button>
                    <span className="whoAreWeMenuPrice">${item.price}</span>
                    <button
                      className="whoAreWeMenuControlButton"
                      type="button"
                      aria-label={`Add one ${item.name} to cart`}
                      onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, variantId: variantIds[item.id] })}
                    >
                      +
                    </button>
                    <span className="whoAreWeMenuCartStatus" aria-live="polite" suppressHydrationWarning>
                      {cartItemCount > 0 ? `${cartItemCount} in cart` : "Not in cart"}
                    </span>
                  </div>
                </div>
              );
            })}
            <div className="whoAreWeMenuCartIcon">
              <CartWidget
                cart={cart}
                onAddToCart={addToCart}
                onRemoveFromCart={removeFromCart}
              />
            </div>
          </div>
        )}
        {selectedMenu === "Pizza" && (
          <div
            id={menuPanelId}
            className="whoAreWeMenuFrames"
            role="tabpanel"
            aria-labelledby={`who-are-we-menu-tab-${selectedMenu.toLowerCase()}`}
            aria-label="Pizza items"
          >
            <div className="whoAreWeMenuFrame whoAreWeMenuFramePizzaCard1">
              <div className="whoAreWeMenuFramePizzaImage1" aria-hidden="true" />
              <p className="whoAreWeMenuFramePizzaTitle">Mediterranean pizza</p>
              <p className="whoAreWeMenuFramePizzaPrice">$30</p>
            </div>
            <div className="whoAreWeMenuFrame whoAreWeMenuFramePizzaCard2">
              <div className="whoAreWeMenuFramePizzaImage2" aria-hidden="true" />
              <p className="whoAreWeMenuFramePizzaTitle">Pesto Veggie Pizza</p>
              <p className="whoAreWeMenuFramePizzaPrice">$34</p>
            </div>
            <div className="whoAreWeMenuFrame whoAreWeMenuFramePizzaCard3">
              <div className="whoAreWeMenuFramePizzaImage3" aria-hidden="true" />
              <p className="whoAreWeMenuFramePizzaTitle">Classic Veggie Pizza</p>
              <p className="whoAreWeMenuFramePizzaPrice">$40</p>
            </div>
            <div className="whoAreWeMenuFrame whoAreWeMenuFramePizzaCard4">
              <div className="whoAreWeMenuFramePizzaImage4" aria-hidden="true" />
              <p className="whoAreWeMenuFramePizzaTitle">Margherita Pizza</p>
              <p className="whoAreWeMenuFramePizzaPrice">$35</p>
            </div>
          </div>
        )}
        {isVideoSelected ? (
          <video
            key={selectedDrinkImageSrc}
            className="whoAreWeCocktailImage"
            aria-hidden="true"
            autoPlay
            loop
            muted
            playsInline
            src={selectedDrinkImageSrc}
            style={{
              objectFit: "cover",
              objectPosition: isWineSelected ? "center top" : "center",
            }}
          />
        ) : (
          <div
            className="whoAreWeCocktailImage"
            aria-hidden="true"
            style={{ backgroundImage: `url("${selectedDrinkImageSrc}")` }}
          />
        )}
        <button
          className="whoAreWeCocktailArrowBtn"
          type="button"
          aria-label="Cocktail previous"
          onClick={() => {
            if (isBeerSelected) {
              setSelectedDrinkImageSrc(cocktailVideoSrc);
            } else if (isCocktailSelected) {
              setSelectedDrinkImageSrc(wineVideoSrc);
            }
          }}
        >
          <Image
            className="whoAreWeArrowIcon"
            src="/Who%20are%20we/long-thin-arrow-icon.svg"
            alt=""
            width={20}
            height={8}
          />
        </button>
        <button
          className="whoAreWeCocktailArrowBtnRight"
          type="button"
          aria-label="Cocktail next"
          onClick={() => {
            if (isWineSelected) {
              setSelectedDrinkImageSrc(cocktailVideoSrc);
            } else if (isCocktailSelected) {
              setSelectedDrinkImageSrc(beerVideoSrc);
            }
          }}
        >
          <Image
            className="whoAreWeArrowIcon"
            src="/Who%20are%20we/right-thin-arrow-icon.svg"
            alt=""
            width={20}
            height={8}
          />
        </button>
        <p className="whoAreWeCocktailSlogan">
          {isWineSelected ? "Cabernet Sauvignon" : isBeerSelected ? "Miller Genuine Draft" : "Midnight Craze"}
        </p>
        <p className="whoAreWeCocktailPrice">$8</p>
        {isCocktailSelected && (
          <p className="whoAreWeCocktailText">
            2 oz silver tequila, 1 oz cointreau, 1 oz lime juice, salt for the rim
          </p>
        )}
        <div className="whoAreWeDrinksFrames" aria-label="Drink categories">
          <button
            className="whoAreWeDrinkFrame whoAreWeDrinkFrame14 whoAreWeDrinkFrameBtn"
            type="button"
            aria-label="Select wine image"
            onClick={() => setSelectedDrinkImageSrc(wineVideoSrc)}
          >
            <p className={`whoAreWeDrinkTitle whoAreWeDrinkTitleWine ${isWineSelected ? "whoAreWeDrinkTitleActive" : ""}`}>
              Wine
            </p>
          </button>
          <button
            className="whoAreWeDrinkFrame whoAreWeDrinkFrame15 whoAreWeDrinkFrameBtn"
            type="button"
            aria-label="Select cocktails image"
            onClick={() => setSelectedDrinkImageSrc(cocktailVideoSrc)}
          >
            <p className={`whoAreWeDrinkTitle whoAreWeDrinkTitleCocktails ${isBeerSelected || isWineSelected ? "whoAreWeDrinkTitleMuted" : ""}`}>
              Cocktails
            </p>
          </button>
          <button
            className="whoAreWeDrinkFrame whoAreWeDrinkFrame16 whoAreWeDrinkFrameBtn"
            type="button"
            aria-label="Select beer image"
            onClick={() => setSelectedDrinkImageSrc(beerVideoSrc)}
          >
            <p className={`whoAreWeDrinkTitle whoAreWeDrinkTitleBeer ${isBeerSelected ? "whoAreWeDrinkTitleActive" : ""}`}>
              Beer
            </p>
          </button>
        </div>
      </div>
    </section>
  );
}
