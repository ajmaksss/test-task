import { Header } from "./Header";
import { IRootState } from "../../store";
import { useParams } from "react-router-dom";
import { useAppSelect } from "../../hooks/redux";
import { RequestsTable } from "../../components/RequestsTable/RequestsTable";

export const UserRequests = () => {
  const { id } = useParams();
  const { requests } = useAppSelect((state: IRootState) => state.requests);

  return (
    <div>
      <Header />
      <RequestsTable data={requests?.filter(({ user }) => user.id === id)} />
    </div>
  );
};
