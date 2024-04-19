import { DynamicFormBuilder } from "./build-form/DynamicFormBuilder";
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
