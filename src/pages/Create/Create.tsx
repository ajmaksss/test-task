import { useState } from "react";
import { Title } from "./Title";
import { Types } from "./Types/Types";
import { Footer } from "./Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";

export const Create = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("order");

  const handleChangeSelectedType = (type: string) => setSelectedType(type);

  const handleSubmit = () => navigate(`/${id}/create/${selectedType}`);

  return (
    <div className="max-w-lg mx-auto flex flex-col gap-6">
      <Title />
      <Types selectedType={selectedType} onSelect={handleChangeSelectedType} />
      <Footer onSubmit={handleSubmit} selectedType={selectedType} />
    </div>
  );
};
