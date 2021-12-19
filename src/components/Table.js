import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Table = () => {
  const data = useSelector((state) => state.data.data);
  const [tableData, setTableData] = useState();

  useEffect(() => {
    // setTableData(data);
    console.log("tableData====>", data);
  }, [data]);
  return (
    <>
      <div className="container mx-auto my-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Dates</th>
              <th scope="col">name</th>
              <th scope="col">disease</th>
              <th scope="col">handle</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, ind) => {
              const date = new Date(item.date).getDate().toString();
              const day = new Date(item.date).getDay().toString();
              const month = (new Date(item.date).getMonth() + 1).toString();
              const year = new Date(item.date).getFullYear().toString();
              return (
                <tr key={ind}>
                  <td scope="row">{ind + 1}</td>
                  <td>{`${date}/${month}/${year}`}</td>
                  <td>{item.name}</td>
                  <td>{item.disease}</td>
                  <td>{item.handle}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
