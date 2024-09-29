import { Button, Dropdown, MenuProps } from "antd";
import { ReactComponent as Icon } from "../../assets/img/dots.svg";

interface Props {
  onEdit: () => void;
  onDelete: () => void;
}

export const Actions = ({ onEdit, onDelete }: Props) => {
  const items: MenuProps["items"] = [
    { key: "1", label: <div onClick={onEdit}>Edit</div> },
    {
      key: "2",
      label: (
        <div className="text-red-600" onClick={onDelete}>
          Delete
        </div>
      ),
    },
  ];

  return (
    <div>
      <Dropdown menu={{ items }} placement="bottomRight" trigger={["click"]}>
        <Button icon={<Icon />} />
      </Dropdown>
    </div>
  );
};
