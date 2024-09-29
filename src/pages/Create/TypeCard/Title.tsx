import { Typography } from "antd";

interface Props {
  title: string;
}

export const Title = ({ title }: Props) => (
  <Typography.Text>{title}</Typography.Text>
);
