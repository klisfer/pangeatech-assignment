import React from "react";

export default function Dropdown() {
  return (
    <div className="dropdown">
      {" "}
      <select>
        <option value="fruit">All Revenue Type</option>
        <option value="vegetable">Revenue Type 1</option>
        <option value="vegetable">Revenue Type 2</option>
        <option value="vegetable">Revenue Type 3</option>
        <option value="vegetable">Revenue Type 4</option>
        <option value="vegetable">Revenue Type 5</option>
      </select>
    </div>
  );
}
