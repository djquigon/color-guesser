import React from "react";

const NavIcon = ({ icon, iconName }) => {
  let iconProperties = {};
  switch (iconName) {
    case "home":
      iconProperties.color = "red";
      iconProperties.link = "https://localhost:3000";
      break;
    case "inspiration":
      iconProperties.color = "blue";
      iconProperties.link =
        "https://www.youtube.com/watch?v=QNYljS0_TOE&ab_channel=WebDevJunkie";
      break;
    case "projects":
      iconProperties.color = "yellow";
      iconProperties.link = "https://github.com/djquigon";
      break;
    default:
      iconProperties.color = "green";
      iconProperties.link = "https://localhost:3000";
      break;
  }

  return (
    <a
      className={`text-${iconProperties.color}-200`}
      href={iconProperties.link}
    >
      {icon}
    </a>
  );
};

export default NavIcon;
