import React, { useState } from "react";
import "./App.css";
import { portfolioItems } from "./utils/data";
import { PortfolioItemPage } from "./pages/PortfolioItemPage";
import { PortfolioPage } from "./pages/PortfolioPage";

export const App = () => {
  const [selectedItem, setSelecteditem] = useState(portfolioItems[0]);

  return (
    <div className="App">
      {selectedItem ? (
        <PortfolioItemPage props={selectedItem} />
      ) : (
        <PortfolioPage />
      )}
    </div>
  );
};
