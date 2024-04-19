import { DynamicFormBuilder } from "./build-form/FormBuilder";
import Button from "@mui/material/Button";
import { Property } from "./build-form/InputForm";

interface DynamicFormProps {
  currentInputs: Property[];
}

const DynamicForm: React.FC<DynamicFormProps> = ({ currentInputs }) => {
  const dynamicFormBuilder = new DynamicFormBuilder();
  const inputs = dynamicFormBuilder.execute({
    inputsValues: currentInputs,
  });

  return <>{inputs}</>;
};

export default DynamicForm;
