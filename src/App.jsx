import React, { useState } from "react";
import './index.css'; // Adjust the path if needed


function App() {
  let useritems = ["Air", "Land", "Fire", "Water"];
  const products = [
    "Acid",
    "Alcohol",
    "Ammonites",
    "Ants",
    "Arthropods",
    "Ashes",
    "Bacterium",
    "Beast",
    "Beetle",
    "Bird",
    "Brick",
    "Butterfly",
    "Camel",
    "Caviar",
    "Cells",
    "Cement",
    "Cephalopods",
    "Chicken",
    "Clay",
    "Cloud",
    "Cold",
    "Concrete",
    "Dessert",
    "Dinosaur",
    "Dirt",
    "Dragon",
    "Dragonfly",
    "Dust",
    "Egg",
    "Electricity",
    "Energy",
    "Fish",
    "Frog",
    "Geyser",
    "Glass",
    "Hydrogen",
    "Ice",
    "Insects",
    "Iodine",
    "Jellyfish",
    "Kangaroo",
    "Lake",
    "Lava",
    "Life",
    "Limestone",
    "Lizard",
    "Magnet",
    "Metal",
    "Mite",
    "Molluscs",
    "Mussels",
    "Ocean",
    "Octopus",
    "Pearls",
    "Phoenix",
    "Plankton",
    "Pressure",
    "Salt",
    "Salt Water",
    "Sand",
    "Sandglass",
    "Scorpion",
    "Sea",
    "Seaweed",
    "Shell",
    "Shroom",
    "Silicon",
    "Slugs",
    "Snake",
    "Sound",
    "Spider",
    "Starfish",
    "Steam",
    "Stone",
    "Sulphur",
    "Swamp",
    "Tequila",
    "The Sky",
    "The Storm",
    "Thunder",
    "Time",
    "Turtle",
    "Vodka",
    "Volcano",
    "Whale",
    "Wind",
    "Worm",
  ];

  const data = [
    { product: "Acid", item1: "Fire", item2: "Sulphur" },
    { product: "Alcohol", item1: "Water", item2: "Energy" },
    { product: "Ammonites", item1: "Sand", item2: "Cephalopods" },
    { product: "Ants", item1: "Insects", item2: "Land" },
    { product: "Arthropods", item1: "Land", item2: "Plankton" },
    { product: "Ashes", item1: "Fire", item2: "Dust" },
    { product: "Bacterium", item1: "Life", item2: "Swamp" },
    { product: "Beast", item1: "Land", item2: "Lizard" },
    { product: "Beetle", item1: "Land", item2: "Worm" },
    { product: "Bird", item1: "Air", item2: "Egg" },
    { product: "Brick", item1: "Clay", item2: "Fire" },
    { product: "Butterfly", item1: "Air", item2: "Worm" },
    { product: "Camel", item1: "Dessert", item2: "Beast" },
    { product: "Caviar", item1: "Fish", item2: "Fish" },
    { product: "Cells", item1: "Bacterium", item2: "Bacterium" },
    { product: "Cement", item1: "Clay", item2: "Limestone" },
    { product: "Cephalopods", item1: "Water", item2: "Molluscs" },
    { product: "Chicken", item1: "Egg", item2: "Life" },
    { product: "Clay", item1: "Swamp", item2: "Sand" },
    { product: "Cloud", item1: "Air", item2: "Steam" },
    { product: "Cold", item1: "Wind", item2: "Cloud" },
    { product: "Concrete", item1: "Water", item2: "Cement" },
    { product: "Dessert", item1: "Sand", item2: "Sand" },
    { product: "Dinosaur", item1: "Land", item2: "Egg" },
    { product: "Dirt", item1: "Water", item2: "Dust" },
    { product: "Dragon", item1: "Fire", item2: "Dinosaur" },
    { product: "Dragonfly", item1: "Insects", item2: "Water" },
    { product: "Dust", item1: "Air", item2: "Land" },
    { product: "Egg", item1: "Life", item2: "Stone" },
    { product: "Electricity", item1: "Energy", item2: "Metal" },
    { product: "Energy", item1: "Fire", item2: "Air" },
    { product: "Fish", item1: "Bacterium", item2: "Plankton" },
    { product: "Frog", item1: "Swamp", item2: "Lizard" },
    { product: "Geyser", item1: "Land", item2: "Steam" },
    { product: "Glass", item1: "Fire", item2: "Sand" },
    { product: "Hydrogen", item1: "Water", item2: "Electricity" },
    { product: "Ice", item1: "Water", item2: "Cold" },
    { product: "Insects", item1: "Air", item2: "Beetle" },
    { product: "Iodine", item1: "Fire", item2: "Seaweed" },
    { product: "Jellyfish", item1: "Plankton", item2: "Water" },
    { product: "Kangaroo", item1: "Beast", item2: "Frog" },
    { product: "Lake", item1: "Water", item2: "Water" },
    { product: "Lava", item1: "Fire", item2: "Land" },
    { product: "Life", item1: "Swamp", item2: "Energy" },
    { product: "Limestone", item1: "Shell", item2: "Stone" },
    { product: "Lizard", item1: "Swamp", item2: "Egg" },
    { product: "Magnet", item1: "Electricity", item2: "Metal" },
    { product: "Metal", item1: "Fire", item2: "Stone" },
    { product: "Mite", item1: "Dust", item2: "Life" },
    { product: "Molluscs", item1: "Swamp", item2: "Plankton" },
    { product: "Mussels", item1: "Sand", item2: "Molluscs" },
    { product: "Ocean", item1: "Sea", item2: "Sea" },
    { product: "Octopus", item1: "Cephalopods", item2: "Water" },
    { product: "Pearls", item1: "Sand", item2: "Shell" },
    { product: "Phoenix", item1: "Fire", item2: "Bird" },
    { product: "Plankton", item1: "Water", item2: "Backterium" },
    { product: "Pressure", item1: "Land", item2: "Land" },
    { product: "Salt", item1: "Acid", item2: "Metal" },
    { product: "Salt Water", item1: "Salt", item2: "Water" },
    { product: "Sand", item1: "Stone", item2: "Air" },
    { product: "Sandglass", item1: "Sand", item2: "Glass" },
    { product: "Scorpion", item1: "Sand", item2: "Beetle" },
    { product: "Sea", item1: "Lake", item2: "Salt" },
    { product: "Seaweed", item1: "Life", item2: "Water" },
    { product: "Shell", item1: "Stone", item2: "Plankton" },
    { product: "Shroom", item1: "Air", item2: "Bacterium" },
    { product: "Silicon", item1: "Sand", item2: "Pressure" },
    { product: "Slugs", item1: "Molluscs", item2: "Swamp" },
    { product: "Snake", item1: "Worm", item2: "Swamp" },
    { product: "Sound", item1: "Wind", item2: "Metal" },
    { product: "Spider", item1: "Arthropods", item2: "Stone" },
    { product: "Starfish", item1: "Sand", item2: "Plankton" },
    { product: "Steam", item1: "Water", item2: "Fire" },
    { product: "Stone", item1: "Lava", item2: "Water" },
    { product: "Sulphur", item1: "Swamp", item2: "Bacterium" },
    { product: "Swamp", item1: "Water", item2: "Land" },
    { product: "Tequila", item1: "Worm", item2: "Alcohol" },
    { product: "The Sky", item1: "Cloud", item2: "Air" },
    { product: "The Storm", item1: "Air", item2: "Energy" },
    { product: "Thunder", item1: "The Storm", item2: "Sound" },
    { product: "Time", item1: "Life", item2: "Sandglass" },
    { product: "Turtle", item1: "Sand", item2: "Egg" },
    { product: "Vodka", item1: "Alcohol", item2: "Water" },
    { product: "Volcano", item1: "Lava", item2: "Pressure" },
    { product: "Whale", item1: "Water", item2: "Beast" },
    { product: "Wind", item1: "Air", item2: "Air" },
    { product: "Worm", item1: "Bacterium", item2: "Land" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term.trim() === "") {
      setDropdownVisible(false);
      return;
    }

    const filtered = products.filter((product) =>
      product.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
    setDropdownVisible(true);
  };

  const handleSelectProduct = (product) => {
    setSearchTerm(product);
    setDropdownVisible(false);
    createItem(product);
  };

  const createItem = (item) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].product === item) {
        if (
          useritems.includes(data[i].item1) &&
          useritems.includes(data[i].item2)
        ) {
          useritems.push(data[i].product);
          const newRecipe = `${data[i].item1} + ${data[i].item2} = ${data[i].product}`;
          setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
        } else {
          if (!useritems.includes(data[i].item1)) {
            createItem(data[i].item1);
          }
          if (!useritems.includes(data[i].item2)) {
            createItem(data[i].item2);
          }
          return createItem(item);
        }
      }
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline bg-black">
        Welcome to my Chemistry lab
      </h1>
      <div className="p-4 max-w-md mx-auto relative">
        <h1 className="text-2xl font-bold mb-4 text-center">Product Search</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Search for a product..."
        />
        {dropdownVisible && (
          <ul className="absolute w-full bg-white border border-gray-300 rounded shadow-lg mt-1 max-h-60 overflow-auto">
            {filteredProducts.length ? (
              filteredProducts.map((product, index) => (
                <li
                  key={index}
                  onClick={() => handleSelectProduct(product)}
                  className="p-2 cursor-pointer hover:bg-gray-100"
                >
                  {product}
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-500">No products found</li>
            )}
          </ul>
        )}
      </div>
      {recipes.length > 0 ? (
        <div className="p-4 max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-4 text-center">Recipe List</h1>
          <ul className="list-disc pl-5">
            {recipes.map((recipe, index) => (
              <li key={index} className="mb-2">
                {recipe}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h1 className="text-2xl font-bold mb-4 text-center">No recipes yet</h1>
      )}
    </>
  );
}

export default App;
