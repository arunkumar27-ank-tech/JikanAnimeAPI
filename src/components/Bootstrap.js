import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Nav(handleLogOut) {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const navs = [
      { name: "Naruto", path: "/Naruto" },
      { name: "Naruto_shippuden", path: "/Narutoshippuden" },
      { name: "thelastnaruto", path: "/lastnaruto" },
      { name: "Boruto", path: "/Boruto" },
      { name: "NarutoMovie", path: "/Narutomovie" },
    ];
    setNavLinks(navs);
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">
            
          </a>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
              style={{fontFamily:'fantasy'}}
            >
              ANIME
              
            </button>

            <ul class="dropdown-menu dropdown-menu-end">
              {navLinks.map((d, i) => (
                <li key={i}>
                  <Link to={d.path}>
                    <button class="dropdown-item" type="button">
                      {d.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;