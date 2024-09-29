import { Modal } from "antd";
import { RequestsTable } from "./RequestsTable/RequestsTable";

interface Props {
  requests: IRequest[];
  onClose: () => void;
}

export const MatchesModal = ({ requests, onClose }: Props) => (
  <Modal
    title="Matches"
    open={requests?.length > 0}
    onCancel={onClose}
    width={1000}
    footer={<></>}
  >
    <RequestsTable data={requests} />
  </Modal>
);
