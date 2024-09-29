import { IRootState } from "../store";
import { useAppSelect } from "../hooks/redux";
import { AdButton } from "../components/AdButton";
import { RequestsTable } from "../components/RequestsTable/RequestsTable";

export const Requests = () => {
  const { requests } = useAppSelect((state: IRootState) => state.requests);

  return (
    <div>
      <AdButton />
      <RequestsTable data={requests} />
    </div>
  );
};
