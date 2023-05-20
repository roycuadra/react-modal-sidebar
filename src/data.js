import React from "react";
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "/team",
    text: "team",
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: "/calendar",
    text: "calendar",
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: "/documents",
    text: "documents",
    icon: <FaWpforms />,
  },
];

export const social = [
  {
    id: 1,
    url: "#",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "#",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "#",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "#",
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: "#",
    icon: <FaSketch />,
  },
];
