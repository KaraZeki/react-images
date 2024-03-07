import "./SearchHeader.css";
import React, { useState } from "react";

function SearchHeader({ search }) {
  const [value, setValue] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(value);
  };
  return (
    <div>
      <form className="myForm" onSubmit={handleFormSubmit}>
        <label> Ne araıyon bilader</label>
        <input
          className="myInput"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchHeader;
