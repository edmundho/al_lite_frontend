import React from 'react';
import { Link } from 'react-router-dom';

const Pages = ({ count, page, min, max }) => {
  const lastPage = count ? Math.floor(count/20) : ' ';
  const pagesToShow = [page, parseInt(page) + 1, parseInt(page) + 2];
  const pages = pagesToShow.map((p, i) => {
    return (
      <Link 
        key={i}
        className="listing-page-num" 
        to={`/listings/${p}/${min}/${max}`}>{p}</Link>
    );
  });

  return (
    <div>
      {pages}
      &nbsp;...&nbsp;
      <Link className="listing-page-num" to={`/listings/${lastPage}/${min}/${max}`}>{lastPage}</Link>
    </div>
  );
};

export default Pages;