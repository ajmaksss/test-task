import "./styles.scss";
import { Button } from "antd";

interface Props {
  onSubmit: () => void;
}

export const SubmitButton = ({ onSubmit }: Props) => (
  <Button
    size="large"
    type="primary"
    className="w-full create-submit-btn"
    onClick={onSubmit}
  >
    Continue
  </Button>
);
