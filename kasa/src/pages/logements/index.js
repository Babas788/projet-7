import { useParams } from "react-router-dom";
import Products from "../../data/logements.json";
import Tags from "../../components/tags/index";
import Rating from "../../components/rating/index";
import Collapse from "../../components/collapse/index";
import Carousel from "../../components/carousel";

function Logement() {
  const { id } = useParams();
  let product = Products.find((product) => product.id === id);
  return (
    <div className="logement">
      <Carousel data={product.pictures} />
      <div className="logement_precision">
        <div className="logement_detail">
          <p className="titleDescription">{product.title}</p>
          <p className="location">{product.location}</p>
          <div className="tagLogement">
            {product.tags.map((tag, index) => (
              <Tags key={index} tagLogement={tag} className="tag" />
            ))}
          </div>
        </div>
        <div className="renseignements">
          <div className="rateLogement">
            <Rating rating={product.rating} />
            <div className="host">
              <p className="host_name">{product.host.name}</p>
              <img
                src={product.host.picture}
                alt="host_picture"
                className="host_picture"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="collapse_Logement">
        <div className="collapse_Logement_description">
          <Collapse title="Desciption" content={product.description} />
        </div>
        <div className="collapse_Logement_equipements">
          <Collapse title="Equipements" content={product.equipments} />
        </div>
      </div>
    </div>
  );
}

export default Logement;
