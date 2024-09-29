import { Button } from "antd";
import { ACTIVE_USER_ID } from "../contants";
import { NavLink, useParams } from "react-router-dom";

export const AdButton = () => {
  const { id } = useParams();

  return (
    <NavLink
      className="block w-max ml-auto mb-3"
      to={`/${id ?? ACTIVE_USER_ID}/create`}
    >
      <Button type="primary">Add Request</Button>
    </NavLink>
  );
};
