import React from "react";
import { useSelector } from "react-redux";

const Table = () => {
  const data = useSelector((state) => state.data.data);
  return (
    <>
      <div className="container mx-auto my-3">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Dates</th>
              <th scope="col">name</th>
              <th scope="col">disease</th>
              <th scope="col">handle</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, ind) => {
                const date = new Date(item.date).getDate().toString();
                const month = (new Date(item.date).getMonth() + 1).toString();
                const year = new Date(item.date).getFullYear().toString();
                return (
                  <tr key={ind}>
                    <td>{ind + 1}</td>
                    <td>{`${date}/${month}/${year}`}</td>
                    <td>{item.name}</td>
                    <td>{item.disease}</td>
                    <td>{item.handle}</td>
                  </tr>
                );
              })
            ) : (
              <p>Not in record</p>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
