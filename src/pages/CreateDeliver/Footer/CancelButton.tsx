import { Button } from "antd";
import { NavLink } from "react-router-dom";

export const CancelButton = () => (
  <NavLink to="/requests" className="block mr-2">
    <Button>Cancel</Button>
  </NavLink>
);
