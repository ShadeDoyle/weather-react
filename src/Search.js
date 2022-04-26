import React from "react";

export default function Search() {
  return (
    <form class="search-form" id="search-form">
      <input
        type="text"
        placeholder="Enter a City"
        id="city-input"
        autocomplete="off"
      />
      <input
        type="submit"
        value="Change City"
        class="submit-button"
        id="submit-city "
      />
    </form>
  );
}
