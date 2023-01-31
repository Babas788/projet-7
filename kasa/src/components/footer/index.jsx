function Footer({ logoFooter, copyright }) {
  return (
    <div className="footer_logo">
      <img src={logoFooter} className="kasa_logo" alt="logo" />
      <img src={copyright} className="right" alt="right" />
    </div>
  );
}

export default Footer;
