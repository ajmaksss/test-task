import "./styles.scss";
import { Layout } from "antd";
import { NavLink } from "react-router-dom";
import { ACTIVE_USER_ID } from "../../contants";

const LINKS = [
  { title: "Requests", link: "/requests" },
  { title: "My Requests", link: `/${ACTIVE_USER_ID}/requests` },
];

export const Header = () => (
  <Layout.Header className="header">
    <div className="container flex gap-5 mx-auto">
      {LINKS.map(({ title, link }, key) => (
        <NavLink key={key} to={link}>
          {title}
        </NavLink>
      ))}
    </div>
  </Layout.Header>
);
