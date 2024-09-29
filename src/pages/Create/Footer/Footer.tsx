import "./styles.scss";
import { BackButton } from "./BackButton";
import { SubmitButton } from "./SubmitButton";

interface Props {
  onSubmit: () => void;
  selectedType: string;
}

export const Footer = ({ onSubmit, selectedType }: Props) => (
  <div
    className={`create-request-footer flex items-center gap-2 ${selectedType}`}
  >
    <BackButton />
    <SubmitButton onSubmit={onSubmit} />
  </div>
);
