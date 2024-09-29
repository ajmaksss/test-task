import "./style.scss";
import dayjs from "dayjs";
import { Title } from "./Title";
import { getUser } from "../../helpers";
import { Footer } from "./Footer/Footer";
import { useEffect, useState } from "react";
import { useActions } from "../../hooks/actions";
import { DatePicker, Form, Input, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";

export const CreateDeliver = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const values = Form.useWatch([], form);
  const [disabled, setDisabled] = useState(true);
  const { createRequest } = useActions();
  const navigate = useNavigate();

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setDisabled(false))
      .catch(() => setDisabled(true));
  }, [form, values]);

  const handleSuccess = () => {
    message.success("Delivery request has been successfully created", 2);
    navigate(`/${id}`);
  };

  const handleError = () => {
    message.error(
      "Sorry, this user does not exist. Please check the URL and try again",
      2
    );
  };

  const handleSubmit = (values: IRequest) => {
    const user = getUser(id);
    if (user) {
      createRequest({
        ...values,
        type: "deliver",
        dispatch_date: values.dispatch_date
          ? dayjs(values.dispatch_date).valueOf()
          : undefined,
        user,
      });
      handleSuccess();
    } else {
      handleError();
    }
  };

  return (
    <div className="create-deliver-form-wrapper p-5 max-w-3xl mx-auto">
      <Title />
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
          <Form.Item
            name="dispatch_date"
            label="Dispatch date"
            className="w-full  m-0"
          >
            <DatePicker
              className="w-full"
              format="DD.MM.YYYY"
              defaultValue={dayjs()}
            />
          </Form.Item>
        </div>
        <Footer disabled={disabled} />
      </Form>
    </div>
  );
};
