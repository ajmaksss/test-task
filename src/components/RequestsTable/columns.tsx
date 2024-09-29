import { Actions } from "./Actions";
import { TYPES } from "../../contants";
import { NavLink } from "react-router-dom";
import { Button, TableColumnsType, Tag } from "antd";
import PERSEL_TYPES from "../../mockData/perselTypes.json";

interface Props {
  onEdit: (order: IRequest) => void;
  onDelete: (id: string) => void;
  onOpenMatches: (id: string) => void;
}

export const columns: ({
  onEdit,
  onDelete,
  onOpenMatches,
}: Props) => TableColumnsType<IRequestWithMatch> = ({
  onEdit,
  onDelete,
  onOpenMatches,
}: Props) => [
  {
    title: "Type",
    dataIndex: "type",
    render: (v) => <Tag color={TYPES.DELIVER === v ? "gold" : "blue"}>{v}</Tag>,
  },
  {
    title: "User",
    dataIndex: "user",
    render: (v) => (
      <NavLink to={`/${v.id}/requests`} className="text-sky-600">
        {v.name}
      </NavLink>
    ),
  },
  {
    title: "Created at",
    dataIndex: "created_at",
    defaultSortOrder: "descend",
    responsive: ["md"],
    sorter: (a, b) => a.created_at - b.created_at,
    render: (v) => new Date(v).toLocaleDateString(),
  },
  {
    title: "From",
    dataIndex: "city_from",
    responsive: ["sm"],
  },
  {
    title: "To",
    dataIndex: "city_to",
    responsive: ["md"],
  },
  {
    title: "Persel type",
    dataIndex: "persel_type",
    responsive: ["md"],
    render: (id) => PERSEL_TYPES.find((t) => t.id === id)?.label ?? "-",
  },
  {
    title: "Dispatch date",
    dataIndex: "dispatch_date",
    responsive: ["lg"],
    sorter: (a, b) => a.dispatch_date - b.dispatch_date,
    render: (v) => (v ? new Date(v).toLocaleDateString() : "-"),
  },
  {
    title: "Description",
    dataIndex: "description",
    responsive: ["lg"],
    render: (v) => (v?.length > 0 ? v : "-"),
  },
  {
    title: "Matches",
    dataIndex: "match",
    responsive: ["lg"],
    width: 10,
    render: (v, order) => (
      <>
        {v.length > 0 ? (
          <Button
            size="small"
            type="primary"
            onClick={() => onOpenMatches(order?.id)}
          >
            {v.length}
          </Button>
        ) : (
          v.length
        )}
      </>
    ),
  },
  {
    title: "",
    dataIndex: "id",
    width: 10,
    render: (id, order) => (
      <Actions onEdit={() => onEdit(order)} onDelete={() => onDelete(id)} />
    ),
  },
];
