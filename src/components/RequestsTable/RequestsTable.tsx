import { Table } from "antd";
import { useState } from "react";
import { columns } from "./columns";
import { IRootState } from "../../store";
import { DeleteModal } from "../DeleteModal";
import { MatchesModal } from "../MatchesModal";
import { useAppSelect } from "../../hooks/redux";
import { EditModal } from "../EditModal/EditModal";

interface Props {
  data: IRequest[];
}

export const RequestsTable = ({ data }: Props) => {
  const { requests } = useAppSelect((state: IRootState) => state.requests);
  const [edit, setEdit] = useState<null | IRequest>(null);
  const [deleteRequest, setDeleteRequest] = useState<string | null>(null);
  const [openMatches, setOpenMatches] = useState<string | null>(null);

  const handleEdit = (order: IRequest) => setEdit(order);
  const handleCloseEdit = () => setEdit(null);

  const handleDelete = (id: string) => setDeleteRequest(id);
  const handleCloseDelete = () => setDeleteRequest(null);

  const handleOpenMatches = (id: string) => setOpenMatches(id);
  const handleCloseOpenMatches = () => setOpenMatches(null);

  const handleGetMatch = (request: IRequest): IRequest[] => {
    const { city_from, city_to, dispatch_date, user } = request;

    return requests

      .filter((r) => r.user.id !== user.id)
      .filter((r) => r.city_from === city_from)
      .filter((r) => r.city_to === city_to)
      .filter((r) => r.dispatch_date <= dispatch_date);
  };

  const handleGetMatchRequests = (): IRequestWithMatch[] =>
    data.map((request: IRequest) => {
      return { ...request, match: handleGetMatch(request) };
    });

  const handleGetOpendMatches = () =>
    handleGetMatchRequests()?.find((r) => r.id === openMatches)?.match ?? [];

  return (
    <div>
      <EditModal order={edit} onClose={handleCloseEdit} />
      <DeleteModal id={deleteRequest} onClose={handleCloseDelete} />
      <MatchesModal
        requests={handleGetOpendMatches()}
        onClose={handleCloseOpenMatches}
      />
      <Table<IRequestWithMatch>
        columns={columns({
          onEdit: handleEdit,
          onDelete: handleDelete,
          onOpenMatches: handleOpenMatches,
        })}
        dataSource={handleGetMatchRequests()}
        showSorterTooltip={{ target: "sorter-icon" }}
        rowKey={(r) => r.id}
      />
    </div>
  );
};
