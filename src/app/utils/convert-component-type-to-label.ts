import { COMPONENT_TYPE } from "../components/dynamic-form/build-form/InputForm";

export const convertComponentTypeToLabel = (type: string): string => {
  switch (type) {
    case "CHECKBOX":
      return "Checkbox";
    case "DROPDOWN_INPUT":
      return "Select Input";
    case "INPUT_DEFAULT":
      return "Input";
    case "SWITCH":
      return "Switch";
    default:
      return "";
  }
};

export const convertComponentToLabel = (type: COMPONENT_TYPE): string => {
  switch (type) {
    case COMPONENT_TYPE.CHECKBOX:
      return "Checkbox";
    case COMPONENT_TYPE.DROPDOWN_INPUT:
      return "Select Input";
    case COMPONENT_TYPE.INPUT_DEFAULT:
      return "Input";
    case COMPONENT_TYPE.SWITCH:
      return "Switch";
    default:
      return "";
  }
};
