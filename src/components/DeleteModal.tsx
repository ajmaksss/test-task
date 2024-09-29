import { message, Modal } from "antd";
import { useActions } from "../hooks/actions";

interface Props {
  id: string | null;
  onClose: () => void;
}

export const DeleteModal = ({ id, onClose }: Props) => {
  const { deleteRequest } = useActions();

  const handleDelete = () => {
    deleteRequest(id);
    message.success("Request has been successfully deleted", 2);
    onClose();
  };

  return (
    <Modal
      title={"Delete the request"}
      open={!!id}
      onOk={handleDelete}
      onCancel={onClose}
    >
      Are you sure to delete this request?
    </Modal>
  );
};
