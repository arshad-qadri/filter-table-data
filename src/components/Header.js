import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterData } from "../Redux/actions";
import AllData from "../Redux/data";
import FilterPopup from "./FilterPopup";

const Header = () => {
  const [search, setSearch] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [popup, setPopup] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const filterSugg = AllData.filter((item) => {
      return item.name.toLowerCase().includes(search?.trim().toLowerCase());
    });
    if (search.trim()) {
      setSuggestion(filterSugg);
    } else if (search.trim().length === 0) {
      dispatch(filterData(AllData));
    } else {
      setSuggestion([]);
    }
    const suggsClose = suggestion.filter(
      (e) => e.name.toLowerCase() === search.trim().toLowerCase()
    );
    if (suggsClose[0]?.name === search) {
      setSuggestion([]);
    }
  }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search) {
      const filter_Data = AllData.filter(
        (item) => item.name.toLowerCase() === search.trim().toLowerCase()
      );
      dispatch(filterData(filter_Data));
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
              {suggestion.length > 0 && search.trim() && (
                <div className="suggestion  bg-white shadow-lg rounded border">
                  {suggestion.map((item, index) => (
                    <p
                      key={index}
                      className="text-capitalize w-100 px-2 py-1 m-0"
                      onClick={() => setSearch(item.name)}
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
                value={search}
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
                className="ml-auto btn btn-warning"
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
