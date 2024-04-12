import React from "react";
import {Pagination} from "react-bootstrap";

const PaginationCom = ({ postperPage, posts }) => {
  //totalpost ike toplam gönderileri alacak
  let pageNumbers = []; // sayfanumaraları değişkeni
  for (let i = 1; i <= Math.ceil(posts.length / postperPage); i++) {
    pageNumbers.push(i);
}
console.log(pageNumbers);
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a href="" className="page-link">{number}</a>
          </li>
        ))}
      </ul>
      
    </nav>
  );
};

export default PaginationCom;
