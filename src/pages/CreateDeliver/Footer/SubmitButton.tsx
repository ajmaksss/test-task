import { Button } from "antd";

interface Props {
  disabled: boolean;
}

export const SubmitButton = ({ disabled }: Props) => (
  <Button type="primary" htmlType="submit" disabled={disabled}>
    Create
  </Button>
);
