import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BackIcon } from "../../../assets/img/back-icon.svg";

export const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  return (
    <Button size="large" onClick={handleBack}>
      <BackIcon className="w-8" />
    </Button>
  );
};
