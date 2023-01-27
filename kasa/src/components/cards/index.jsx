import { Link } from "react-router-dom";
import Products from "../../data/logements.json";
import React from 'react';

function Cards() {
  return (
    <>
      <section className="homeProducts">
        {Products.map((product) => {
          return (
            <article key={product.id} className="cardsLogement">
              <Link to={`/logement/${product.id}`} className="link">
                <img
                  src={product.cover}
                  alt="pictureLogement"
                  className="pictureLogement"
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
