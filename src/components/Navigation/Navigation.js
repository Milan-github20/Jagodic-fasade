import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import photo from "../../photo/jagodicfasade.jpg";

const Navigation = () => {
  // const selectedLink = document.querySelectorAll(".navLink");

  // for (let i = 0; i < selectedLink.length; i++) {
  //   selectedLink[i].addEventListener("click", function () {
  //     let current = document.querySelector(".active");
  //     if (current) {
  //       current.classList.remove(".active");
  //     }
  //     this.classList.add(".active");
  //   });
  // }
  const links = [
    {
      id: 1,
      path: "/",
      text: "Pocetna",
    },
    {
      id: 2,
      path: "/ponuda",
      text: "Ponuda",
    },
    {
      id: 3,
      path: "/galerija",
      text: "Galerija",
    },
    {
      id: 4,
      path: "/kontakt",
      text: "Kontakt",
    },
  ];
  return (
    <nav>
      <div className={styles.image}>
        <input type="image" src={photo} alt="photo" />
      </div>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id} className={styles.navLink}>
              <NavLink to={link.path} exact>
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
