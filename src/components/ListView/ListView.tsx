
import React, { useState } from "react";
import "./ListView.scss";
import ListViewData from "../../constants/ListViewData";
import ListViewHeading from "../../constants/ListViewHeading";
import Pagination from "./Pagination";

const ListView: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; 
  const totalPages = Math.ceil(ListViewData.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log(`Current Page: ${page}`);
  };

  // Calculate the items to show on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ListViewData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <table className="table table-hover gx-5">
        <thead>
        {ListViewHeading.map((listHeading) => (
            <tr>
              <th>{listHeading.name}</th>
              <th>{listHeading.rollno}</th>

              <th>{listHeading.class}</th>
              <th>{listHeading.marks}</th>
              <th>{listHeading.grade}</th>
            </tr>
          ))}
        </thead>
        <tbody>
          {currentItems.map((listData, i) => (
            <tr key={i}>
              <td>
                <img src={listData.imgUrl} alt={listData.name} /> {listData.name}
              </td>
              <td>{listData.rollno}</td>
              <td>{listData.class}</td>
              <td>{listData.marks}</td>
              <td>{listData.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </>
  );
};

export default ListView;

