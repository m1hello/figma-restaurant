"use client";

import { useRef, useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";

export default function WhoAreWe() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const wineVideoSrc = "/Who%20are%20we/Cocktails/animate%20wine.mp4";
  const beerVideoSrc = "/Who%20are%20we/Cocktails/Beer%20animation.mp4";
  const cocktailVideoSrc = "/Who%20are%20we/Cocktails/Cocktail%20animation.mp4";
  const [selectedMenu, setSelectedMenu] = useState("Pasta");
  const [selectedDrinkImageSrc, setSelectedDrinkImageSrc] = useState(
    cocktailVideoSrc,
  );
  const isWineSelected = selectedDrinkImageSrc.includes("animate%20wine.mp4");
  const isBeerSelected = selectedDrinkImageSrc.includes("Beer%20animation.mp4");
  const isCocktailSelected = selectedDrinkImageSrc.includes("Cocktail%20animation.mp4");
  const isVideoSelected = isBeerSelected || isCocktailSelected || isWineSelected;

  const scrollGallery = (direction: "left" | "right") => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const cardStep = 651 + 40;
    const nextLeft = direction === "left" ? -cardStep : cardStep;
    gallery.scrollBy({ left: nextLeft, behavior: "smooth" });
  };

  return (
    <section id="who-are-we" className="whoAreWeSection" aria-label="Who are we">
      <div className="whoAreWeInner">
        <Navbar variant="light" />
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
          aria-label="Previous"
          onClick={() => scrollGallery("left")}
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
          aria-label="Next"
          onClick={() => scrollGallery("right")}
        >
          <Image
            className="whoAreWeArrowIcon"
            src="/Who%20are%20we/right-thin-arrow-icon.svg"
            alt=""
            width={20}
            height={8}
          />
        </button>
        <div ref={galleryRef} className="whoAreWeGallery" aria-label="Who are we gallery">
          <div className="whoAreWeInteriorImage1" aria-hidden="true" />
          <div className="whoAreWeInteriorImage2" aria-hidden="true" />
          <div className="whoAreWeInteriorImage3" aria-hidden="true" />
          <div className="whoAreWeInteriorImage4" aria-hidden="true" />
        </div>
        <h2 id="who-are-we-menu" className="whoAreWeMenuSlogan">
          Menu
        </h2>
        <p className="whoAreWeMenuText">
          Lacus lobortis nullam nam consectetur fermentum mattis pellentesque id nulla.
          Risus convallis iaculis risus ac aliquam sit ultricies. Adipiscing adipiscing
          pellentesque tincidunt vitae. Aliquam dolor egestas nam congue elit dolor.
        </p>
        <div className="whoAreWeMenuChips" aria-label="Menu categories">
          <button
            className={`whoAreWeMenuChip whoAreWeMenuChipAppetizers ${selectedMenu === "Appetizers" ? "whoAreWeMenuChipActive" : ""}`}
            type="button"
            aria-pressed={selectedMenu === "Appetizers"}
            onClick={() => setSelectedMenu("Appetizers")}
          >
            Appetizers
          </button>
          <button
            className={`whoAreWeMenuChip whoAreWeMenuChipPasta ${selectedMenu === "Pasta" ? "whoAreWeMenuChipActive" : ""}`}
            type="button"
            aria-pressed={selectedMenu === "Pasta"}
            onClick={() => setSelectedMenu("Pasta")}
          >
            Pasta
          </button>
          <button
            className={`whoAreWeMenuChip whoAreWeMenuChipPizza ${selectedMenu === "Pizza" ? "whoAreWeMenuChipActive" : ""}`}
            type="button"
            aria-pressed={selectedMenu === "Pizza"}
            onClick={() => setSelectedMenu("Pizza")}
          >
            Pizza
          </button>
          <button
            className={`whoAreWeMenuChip whoAreWeMenuChipSalads ${selectedMenu === "Salads" ? "whoAreWeMenuChipActive" : ""}`}
            type="button"
            aria-pressed={selectedMenu === "Salads"}
            onClick={() => setSelectedMenu("Salads")}
          >
            Salads
          </button>
          <button
            className={`whoAreWeMenuChip whoAreWeMenuChipSoups ${selectedMenu === "Soups" ? "whoAreWeMenuChipActive" : ""}`}
            type="button"
            aria-pressed={selectedMenu === "Soups"}
            onClick={() => setSelectedMenu("Soups")}
          >
            Soups
          </button>
          <button
            className={`whoAreWeMenuChip whoAreWeMenuChipDesserts ${selectedMenu === "Desserts" ? "whoAreWeMenuChipActive" : ""}`}
            type="button"
            aria-pressed={selectedMenu === "Desserts"}
            onClick={() => setSelectedMenu("Desserts")}
          >
            Desserts
          </button>
        </div>
        {selectedMenu === "Pasta" && (
          <div className="whoAreWeMenuFrames" aria-label="Menu items">
            <div className="whoAreWeMenuFrame whoAreWeMenuFrame9" aria-hidden="true" />
            <div className="whoAreWeMenuFrame whoAreWeMenuFrame11" aria-hidden="true" />
            <div className="whoAreWeMenuFrame whoAreWeMenuFrame10" aria-hidden="true" />
            <div className="whoAreWeMenuFrame whoAreWeMenuFrame12" aria-hidden="true" />
          </div>
        )}
        {selectedMenu === "Pizza" && (
          <div className="whoAreWeMenuFrames" aria-label="Pizza items">
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
            onClick={() => {
              setSelectedDrinkImageSrc(wineVideoSrc);
            }}
          >
            <p
              className={`whoAreWeDrinkTitle whoAreWeDrinkTitleWine ${isWineSelected ? "whoAreWeDrinkTitleActive" : ""}`}
            >
              Wine
            </p>
          </button>
          <button
            className="whoAreWeDrinkFrame whoAreWeDrinkFrame15 whoAreWeDrinkFrameBtn"
            type="button"
            aria-label="Select cocktails image"
            onClick={() => {
              setSelectedDrinkImageSrc(cocktailVideoSrc);
            }}
          >
            <p
              className={`whoAreWeDrinkTitle whoAreWeDrinkTitleCocktails ${isBeerSelected || isWineSelected ? "whoAreWeDrinkTitleMuted" : ""}`}
            >
              Cocktails
            </p>
          </button>
          <button
            className="whoAreWeDrinkFrame whoAreWeDrinkFrame16 whoAreWeDrinkFrameBtn"
            type="button"
            aria-label="Select beer image"
            onClick={() => {
              setSelectedDrinkImageSrc(beerVideoSrc);
            }}
          >
            <p
              className={`whoAreWeDrinkTitle whoAreWeDrinkTitleBeer ${isBeerSelected ? "whoAreWeDrinkTitleActive" : ""}`}
            >
              Beer
            </p>
          </button>
        </div>
      </div>
    </section>
  );
}
