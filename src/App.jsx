import "./App.css";
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Header, Home, PizzaType, Toppings, Order, Modal } from "./components";

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  const addBase = (base) => {
    setPizza({ ...pizza, base: base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }

    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <div className="App">
      <Header />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        setPizza={setPizza}
      />
      <main className="container">
        <AnimatePresence mode="wait" onExitComplete={() => setShowModal(false)}>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Home />} />
            <Route
              path="/pizza"
              element={<PizzaType pizza={pizza} addBase={addBase} />}
            />
            <Route
              path="/toppings"
              element={<Toppings pizza={pizza} addTopping={addTopping} />}
            />
            <Route
              path="/order"
              element={<Order pizza={pizza} setShowModal={setShowModal} />}
            />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
