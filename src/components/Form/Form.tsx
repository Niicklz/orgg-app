/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import "./Form.css";

export type FormData = {
  name: string;
  position: string;
  photoUrl: string;
  role: string;
};

interface FormProps {
  onChange(payload: FormData): void;
  onSubmit(): void;
}

const defaultFormState: FormData = {
  name: "",
  position: "",
  photoUrl: "",
  role: "",
};

const roleOptions = [
  "Programacion",
  "Front-End",
  "Data Cience",
  "DevOps",
  "UX y Diseño",
  "Movil",
  "Innovacion y Gestion",
];

export const Form = ({ onChange, onSubmit }: FormProps) => {
  const [formData, setFormData] = React.useState<FormData>({
    ...defaultFormState,
  });

  const handleFieldChange = (name: keyof FormData) => {
    return (value: string) => {
      setFormData((currentData) => {
        return {
          ...currentData,
          [name]: value,
        };
      });
    };
  };

  React.useEffect(() => onChange?.(formData), [formData]);

  return (
    <form action="" className="form-colaborator">
      <fieldset className="form-colaborator-fieldset">
        <legend>Rellena el Formulario para crear el colaborador</legend>
        <Input
          placeholder="Este es un input"
          type="text"
          labelText="Nombre"
          value={formData.name}
          handleChange={handleFieldChange("name")}
        />
        <Input
          placeholder="Este es un input"
          type="text"
          labelText="Puesto"
          value={formData.position}
          handleChange={handleFieldChange("position")}
        />
        <Input
          placeholder="Este es un input"
          type="text"
          labelText="Foto"
          value={formData.photoUrl}
          handleChange={handleFieldChange("photoUrl")}
        />
        <Select
          onChange={handleFieldChange("role")}
          value={formData.role}
          options={roleOptions}
        />
        <Button onClick={onSubmit} />
      </fieldset>
    </form>
  );
};
