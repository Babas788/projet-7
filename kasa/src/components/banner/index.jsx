
function Banner({ image, text }) {
  return (
    <div className="banner">
      <img src={image} className="banner_img" alt="banner_img" />
      <p className="text">{text}</p>
    </div>
  );
}

export default Banner;
