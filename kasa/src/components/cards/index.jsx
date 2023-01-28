import { Link } from "react-router-dom";
import Products from "../../data/logements.json";
import React from 'react';

function Cards() {
  return (
    <>
      <section className="home_products">
        {Products.map((product) => {
          return (
            <article key={product.id} className="cards_logement">
              <Link to={`/logement/${product.id}`} className="link">
                <img
                  src={product.cover}
                  alt="picture_logement"
                  className="picture_logement"
                />
                <div className="title">
                <p>{product.title}</p>
                </div>
              </Link>
            </article>
          );
        })}
      </section>
    </>
  );
}

export default Cards;
