import { useLoaderData } from "react-router";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedcoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedcoffees);
  return (
    <div className="m-20">
      <h1 className="text-3xl text-purple-600">
        Hot Cold Coffee {coffees.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
