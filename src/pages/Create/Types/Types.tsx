import { TypeCard } from "../TypeCard/TypeCard";

interface Props {
  selectedType: string;
  onSelect: (type: string) => void;
}

export const Types = ({ selectedType, onSelect }: Props) => (
  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
    <TypeCard
      type="order"
      onClick={() => onSelect("order")}
      active={selectedType === "order"}
    />
    <TypeCard
      type="deliver"
      onClick={() => onSelect("deliver")}
      active={selectedType === "deliver"}
    />
  </div>
);
