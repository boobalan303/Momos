import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dynamic.css";

const Dynamic = () => {
  const items = [
    { id: 1, name: "Fried Momos", description: "The Crinchy Flaours" },
    { id: 2, name: "Item 2", description: "Description for Item 2" },
    { id: 3, name: "Item 3", description: "Description for Item 3" },
    { id: 4, name: "Item 4", description: "Description for Item 4" },
    { id: 5, name: "Item 5", description: "Description for Item 5" },
    { id: 6, name: "Item 6", description: "Description for Item 6" },
    { id: 7, name: "Item 7", description: "Description for Item 7" },
    { id: 8, name: "Item 8", description: "Description for Item 8" },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center text-warning mb-4">Horizontal Scroll Section</h2>
      <div className="scroll-container">
        <div className="d-flex flex-row">
          {items.map((item) => (
            <div className="card me-3" key={item.id} style={{ width: "200px" }}>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dynamic;
