import "./styles.scss";
import { Title } from "./Title";
import { ReactComponent as OrderIcon } from "../../../assets/img/order.svg";
import { ReactComponent as DeliveryIcon } from "../../../assets/img/delivery.svg";

interface Props {
  type: "order" | "deliver";
  onClick: () => void;
  active: boolean;
}

const TYPES = {
  order: {
    title: "Order",
    icon: () => <OrderIcon />,
  },
  deliver: {
    title: "Deliver",
    icon: () => <DeliveryIcon />,
  },
};

export const TypeCard = ({ type, onClick, active }: Props) => (
  <div
    className={`type-card ${type} ${
      active && "active"
    } flex flex-col items-center gap-2 cursor-pointer`}
    onClick={onClick}
  >
    {TYPES[type].icon()}
    <Title title={TYPES[type].title} />
  </div>
);
