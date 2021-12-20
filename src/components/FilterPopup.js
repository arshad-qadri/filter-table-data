import React, { useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import { Dropdown } from "primereact/dropdown";
import AllData from "../Redux/data";
import { useDispatch } from "react-redux";
import { filterData } from "../Redux/actions";
import {
  A_Z_Data,
  filterByDate,
  filterByName,
  Z_A_Data,
} from "../customFunction";

const FilterPopup = () => {
  const [name, setName] = useState([]);
  const [fromDate, setFromDate] = useState("from");
  const [toDate, setToDate] = useState("");
  const [sort, setSort] = useState("A-Z");
  const dispatch = useDispatch();
  const nameOpt = AllData.map((item) => {
    return { ...item, label: item.name, value: item.name };
  });
  const sortOpt = [
    { label: "A-Z", value: "A-Z" },
    { label: "Z-A", value: "Z-A" },
  ];

  const handleFilter = (e) => {
    e.preventDefault();
    const filteredDatabyDate = filterByDate(AllData, fromDate, toDate);
    if (name.length > 0) {
      const filter_name = filterByName(name, AllData);
      const filter_date = filterByDate(filter_name, fromDate, toDate);
      if (filter_date.length > 0) {
        if (sort === "A-Z") {
          dispatch(filterData(A_Z_Data(filter_date)));
        } else {
          dispatch(filterData(Z_A_Data(filter_date)));
        }
      } else {
        if (sort === "A-Z") {
          dispatch(filterData(A_Z_Data(filter_name)));
        } else {
          dispatch(filterData(Z_A_Data(filter_name)));
        }
      }
    } else if (filteredDatabyDate?.length) {
      if (sort === "A-Z") {
        dispatch(filterData(A_Z_Data(filteredDatabyDate)));
      } else {
        dispatch(filterData(Z_A_Data(filteredDatabyDate)));
      }
    } else if (sort) {
      if (sort === "A-Z") {
        dispatch(filterData(A_Z_Data(AllData)));
      } else {
        dispatch(filterData(Z_A_Data(AllData)));
      }
    }
  };
  return (
    <>
      <div className="popup bg-white shadow rounded border p-3">
        <form>
          <div className="form-group d-flex align-items-center date-select">
            <label>From</label>
            <input
              type="date"
              className="form-control-file"
              id="exampleFormControlFile1"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
          <div className="form-group d-flex align-items-center date-select">
            <label>To</label>
            <input
              type="date"
              className="form-control-file"
              id="exampleFormControlFile1"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
          <div className="multiselect w-100">
            <label className="label">Select Name</label>
            <MultiSelect
              value={name}
              options={nameOpt}
              onChange={(e) => setName(e.value)}
              placeholder="Select name"
            />
          </div>
          <div className="multiselect w-100 mt-1">
            <label className="label">Sort</label>
            <Dropdown
              value={sort}
              options={sortOpt}
              onChange={(e) => setSort(e.value)}
            />
          </div>
          <button
            className="btn btn-success w-100 mt-2"
            onClick={(e) => handleFilter(e)}
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default FilterPopup;
