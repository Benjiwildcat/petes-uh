import React, { useState } from "react";
import Checkout from "./pages/Checkout";

export default function PetesContainer() {
  const [currentPage, setCurrentPage] = useState("Checkout");

  const renderPage = () => {
    if (currentPage === "Checkout") {
      return <Checkout />;
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
      <div>
        <Checkout
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        {renderPage()}
      </div>
    );
  };
}
