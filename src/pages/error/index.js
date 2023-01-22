function Error() {
  return (
    <div className="error">
      <h1 className="error_code">404</h1>
      <h2 className="packshot">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <p className="indication">Retournez sur la page d'acceuil</p>
    </div>
  );
}

export default Error;
