import { Form } from "antd";
import { CancelButton } from "./CancelButton";
import { SubmitButton } from "./SubmitButton";

interface Props {
  disabled: boolean;
}

export const Footer = ({ disabled }: Props) => (
  <Form.Item className="m-0">
    <div className="flex items-center justify-end">
      <CancelButton />
      <SubmitButton disabled={disabled} />
    </div>
  </Form.Item>
);
