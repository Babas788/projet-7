
function Banner({ image, text }) {
  return (
    <div className="banner">
      <img src={image} className="bannerImg" alt="bannerImg" />
      <p className="text">{text}</p>
    </div>
  );
}

export default Banner;
