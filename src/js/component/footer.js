import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <p>
      Made with <i className="fa fa-heart text-danger" /> by{" "}
      <Link className="github" to="https://github.com/ValentinFrAr">
        https://github.com/ValentinFrAr
      </Link>
    </p>
  </footer>
);
