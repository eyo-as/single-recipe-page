import React from "react";
import omelette from "../../assets/image/image-omelette.jpeg";

const Home = () => {
  return (
    <main className="bg-red-100 text-black sm:py-20 sm:px-10 md:px-32 lg:px-64 lg:py-24">
      <div className="container mx-auto bg-white sm:p-10 rounded-2xl">
        <div>
          <div className="w-full">
            <img
              className="w-full rounded-2xl"
              src={omelette}
              alt="ommelette"
            />
          </div>
        </div>
        <div className="p-8">
          <div>
            <div>
              <h1 className="text-3xl font-cursive pb-5">
                Simple Omelette Recipe
              </h1>
              <p>
                An easy and quick dish fish, perfect for any meal. This classic
                ommelette combines beaten eggs cooked to perfection, optionally
                filled with your choice of cheese, vegetables, or meats.
              </p>
            </div>
            <div className="my-5 p-5 bg-red-50 rounded-2xl">
              <p className="font-bold text-xl text-red-900">Preparation time</p>
              <div className="p-3 space-y-2">
                <li>
                  {" "}
                  <span className="font-bold">Total:</span> Approximately 10
                  minutes
                </li>
                <li>
                  <span className="font-bold">Preparation: </span>5 minutes
                </li>
                <li>
                  <span className="font-bold">Cooking:</span> 5 minutes
                </li>
              </div>
            </div>
          </div>
          <div className="pb-5">
            <h1 className="text-3xl font-bold text-red-800 pb-3">
              Ingredients
            </h1>
            <span className="space-y-2">
              <li>2-3 large eggs</li>
              <li>Salt, to taste</li>
              <li>Pepper, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </span>
          </div>
          <hr />
          <div className="pt-5">
            <h1 className="text-3xl font-bold text-red-800 pb-3">
              Instructions
            </h1>
            <span>
              <ol type="1" className="list-decimal space-y-2 p-3">
                <li>
                  <span className="font-bold">Beat the eggs: </span>
                  In a bowl, beat the eggs with a pinch of salt and pepper until
                  they are well mixed. You can add a tablespoon of water or milk
                  for a fluffier texture.
                </li>
                <li>
                  <span className="font-bold">Heat the pan: </span>
                  Place a non-stick frying pan over medium heat and add butter
                  or oil.
                </li>
                <li>
                  <span className="font-bold">Cook the omelette: </span>
                  Once the butter is melted and bubbling, pour in the eggs. Tilt
                  the pan to ensure the eggs evenly coat the surface.
                </li>
                <li>
                  <span className="font-bold">Add fillings: </span> Once the
                  omelette is cooked, add the desired fillings. Serve
                  immediately.
                </li>
                <li>
                  <span className="font-bold">Food and Serve: </span>
                  Serve the omelette with your favorite toppings.
                </li>
                <li>
                  <span className="font-bold">Enjoy: </span>
                  Serve hot with a glass of your choice.
                </li>
              </ol>
            </span>
          </div>
          <hr className="my-5" />
          <div>
            <h2 className="text-3xl font-bold text-red-800 pb-3">Nutrition</h2>
            <div>
              <span>
                The table below shows nutritional values per serving without the
                additional fillings.
              </span>
              <span>
                <table className="table-auto w-full text-center my-5 space-y-2">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">Calories</td>
                      <td className="font-bold text-red-800">277Kcal</td>
                    </tr>

                    <tr className="border-b">
                      <td className="p-2">Carbs</td>
                      <td className="font-bold text-red-800">0g</td>
                    </tr>

                    <tr className="border-b">
                      <td className="p-2">Protein</td>
                      <td className="font-bold text-red-800">20g</td>
                    </tr>

                    <tr className="border-b">
                      <td className="p-2">Fat</td>
                      <td className="font-bold text-red-800">22g</td>
                    </tr>
                  </tbody>
                </table>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
