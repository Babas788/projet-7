import Banner from "../../components/banner/index";
import Cards from "../../components/cards/index";
import ImageBanner from "../../assets/IMG.svg";

function Home() {
  return (
    <div className="home">
      <div className="home_banner">
        <Banner image={ImageBanner} text="Chez vous, partout et ailleurs" />
      </div>
      <Cards />
    </div>
  );
}

export default Home;
