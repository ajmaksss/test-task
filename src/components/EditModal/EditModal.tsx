import "./style.scss";
import dayjs from "dayjs";
import { TYPES } from "../../contants";
import { useEffect, useState } from "react";
import { useActions } from "../../hooks/actions";
import PARCEL_TYPES from "../../mockData/perselTypes.json";
import { DatePicker, Form, Input, message, Modal, Select } from "antd";

interface Props {
  order: IRequest | null;
  onClose: () => void;
}

export const EditModal = ({ order, onClose }: Props) => {
  const [form] = Form.useForm();
  const values = Form.useWatch([], form);
  const [disabled, setDisabled] = useState(true);
  const { editRequest } = useActions();

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setDisabled(false))
      .catch(() => setDisabled(true));
  }, [form, values]);

  const handleSuccess = () => {
    onClose();
    message.success(
      `Your ${order?.type} request has been successfully updated`,
      2
    );
  };

  const handleSubmit = () => {
    editRequest({
      ...order,
      ...values,
      dispatch_date: values.dispatch_date
        ? dayjs(values.dispatch_date).valueOf()
        : undefined,
    });
    handleSuccess();
  };

  useEffect(() => {
    form.setFieldsValue({
      ...order,
      dispatch_date: order?.dispatch_date ? dayjs(order.dispatch_date) : null,
    });
  }, [order, form]);

  return (
    <Modal
      title={
        <>
          Edit <span className={`type ${order?.type}`}>{order?.type}</span>
        </>
      }
      open={!!order}
      onOk={handleSubmit}
      onCancel={onClose}
      okButtonProps={{ disabled }}
      className="edit-modal"
    >
      <Form
        form={form}
        layout="vertical"
        name="validateOnly"
        onFinish={handleSubmit}
      >
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-3">
          <Form.Item
            name="city_from"
            label="City from"
            className="w-full  m-0 m-0"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="city_to"
            label="City to"
            className="w-full  m-0"
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-3 ">
          {order?.type === TYPES.DELIVER ? null : (
            <Form.Item
              name="persel_type"
              label="Type of parcel"
              className="w-full  m-0"
            >
              <Select
                options={PARCEL_TYPES.map(({ id, label }) => ({
                  value: id,
                  label,
                }))}
                placeholder="Select type"
              />
            </Form.Item>
          )}
          <Form.Item
            name="dispatch_date"
            label="Dispatch date"
            className="w-full  m-0"
          >
            <DatePicker className="w-full" format="DD.MM.YYYY" />
          </Form.Item>
        </div>
        {order?.type === TYPES.DELIVER ? null : (
          <Form.Item name="description" label="Description">
            <Input.TextArea style={{ height: 100, resize: "none" }} />
          </Form.Item>
        )}
      </Form>
    </Modal>
  );
};
