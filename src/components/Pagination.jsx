import React from "react";
import {Pagination} from "react-bootstrap";

const PaginationCom = ({ postperPage, posts,handlePage }) => {
  //totalpost ike toplam gönderileri alacak
  let pageNumbers = []; // sayfanumaraları değişkeni
  for (let i = 1; i <= Math.ceil(posts.length / postperPage); i++) {
    pageNumbers.push(i);
}
console.log(pageNumbers);
  return (
    <nav className="m-5">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button href="" className="page-link" onClick={()=>handlePage(number)}>{number}</button>
          </li>
        ))}
      </ul>
      
    </nav>
  );
};

export default PaginationCom;
