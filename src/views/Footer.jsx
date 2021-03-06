import React from "react";

const Footer = () => {
  var year = new Date().getFullYear();

  return (
    <footer className="row text-center text-muted">
      <p className="col-12">
        This product uses the{" "}
        <a href="http://www.themoviedb.org/" target="_blank">
          TMDb
        </a>{" "}
        API but is not endorsed or certified by{" "}
        <a href="http://www.themoviedb.org/" target="_blank">
          TMDb
        </a>
        .
      </p>
      <p className="col-12">
        &copy; <a href="http://hpcodecraft.me">hpcodecraft</a> 2014-{year}
      </p>
    </footer>
  );
};

export default Footer;
