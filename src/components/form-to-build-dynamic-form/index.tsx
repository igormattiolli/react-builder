"use client";
import Button from "@mui/material/Button";
import { useState } from "react";
import InputList from "./input-list";
import { COMPONENT_TYPE, Property } from "../dynamic-form/build-form/InputForm";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { convertComponentTypeToLabel } from "@/utils/convert-component-type-to-label";
import { convertType } from "@/utils/convert-types";

interface FormToBuildDynamicFormProps {
  setNewInputs: (inputs: Property[]) => void;
}

const FormToBuildDynamicForm: React.FC<FormToBuildDynamicFormProps> = ({
  setNewInputs,
}) => {
  const [inputs, setInputs] = useState<{ id: string; property: Property }[]>(
    []
  );

  const [input, setInput] = useState<COMPONENT_TYPE>();
  const [label, setLabel] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setInput(event.target.value as COMPONENT_TYPE);
  };

  const handleAdd = () => {
    if (!input) return;

    const id = String(Number(inputs[inputs.length - 1]?.id || 0) + 1);
    const newInput = {
      id,
      property: convertType(input, label),
    };

    setInputs([...inputs, newInput]);
  };

  const submitInputs = () => {
    setNewInputs(inputs.map((input) => input.property));
  };

  return (
    <>
      <h2>Create a new Form</h2>
      <TextField
        id="standard-basic"
        data-testid="standard-basic"
        label="Enter the component label"
        variant="standard"
        fullWidth
        onChange={(event) => setLabel(event.target.value)}
      />
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} fullWidth>
        <InputLabel
          data-testid="demo-simple-select-standard-label"
          id="demo-simple-select-standard-label"
        >
          Select an input
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={input}
          label="Select an input"
          onChange={handleChange}
        >
          {Object.keys(COMPONENT_TYPE).map((key) => {
            return (
              <MenuItem
                key={key}
                value={COMPONENT_TYPE[key as keyof typeof COMPONENT_TYPE]}
              >
                {convertComponentTypeToLabel(key)}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleAdd} fullWidth>
        Add +
      </Button>
      <InputList inputs={inputs} setInputs={setInputs} />
      <Button
        variant="contained"
        data-testid="standard-button"
        onClick={submitInputs}
        fullWidth
      >
        Submit
      </Button>
    </>
  );
};

export default FormToBuildDynamicForm;
