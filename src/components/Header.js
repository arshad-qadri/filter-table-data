import React, { useEffect, useState } from "react";
import AllData from "../Redux/data";
import FilterPopup from "./FilterPopup";

const Header = () => {
  const [search, setSearch] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    const filterSugg = AllData.filter((item) => {
      // if (item.name === search) {
      //   setSuggestion([]);
      // }
      return item.name.toLowerCase().includes(search?.trim().toLowerCase());
    });
    if (search.trim()) {
      setSuggestion(filterSugg);
    } else {
      setSuggestion([]);
    }
    console.log("filterSugg", filterSugg);
    console.log("search", search);
    // setSuggestion([]);
  }, [search]);
  const handleSuggestion = (name) => {
    setSearch(name);
    console.log("name", typeof name);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch("abcd");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container ">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0 d-flex w-100 search">
              {suggestion.length > 0 && (
                <div className="suggestion  bg-white shadow-lg rounded border">
                  {suggestion.map((item, index) => (
                    <p
                      key={index}
                      className="text-capitalize w-100 px-2 py-1 m-0"
                      onClick={() => handleSuggestion(item.name)}
                    >
                      {item.name}
                    </p>
                  ))}
                </div>
              )}
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                onClick={(e) => handleSearch(e)}
              >
                Search
              </button>
            </form>
            <div className="show-popup">
              {popup && <FilterPopup />}
              <button
                className="ml-auto btn btn-primary"
                onClick={() => setPopup(!popup)}
              >
                Filter
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
