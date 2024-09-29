import { Breadcrumb } from "antd";
import users from "../../mockData/users.json";
import { AdButton } from "../../components/AdButton";
import { NavLink, useParams } from "react-router-dom";

export const Header = () => {
  const { id } = useParams();

  return (
    <div className="mb-3">
      <Breadcrumb
        items={[
          {
            title: <NavLink to="/requests">Requests</NavLink>,
          },
          {
            title: users?.find((u) => u.id === id)?.name,
          },
        ]}
        className="mb-2"
      />
      <AdButton />
    </div>
  );
};
