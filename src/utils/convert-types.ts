import {
  COMPONENT_TYPE,
  Property,
} from "@/components/dynamic-form/build-form/InputForm";

export const convertType = (type: COMPONENT_TYPE, label: string): Property => {
  switch (type) {
    case COMPONENT_TYPE.CHECKBOX:
      return {
        type: COMPONENT_TYPE.CHECKBOX,
        props: {
          label,
          values: ["example 1", "example 2", "example 3"],
        },
      };
    case COMPONENT_TYPE.DROPDOWN_INPUT:
      return {
        type: COMPONENT_TYPE.DROPDOWN_INPUT,
        props: {
          label,
          values: ["example 1", "example 2", "example 3"],
        },
      };
    case COMPONENT_TYPE.INPUT_DEFAULT:
      return {
        type: COMPONENT_TYPE.INPUT_DEFAULT,
        props: {
          label,
          values: ["example 1", "example 2", "example 3"],
        },
      };
    case COMPONENT_TYPE.SWITCH:
      return {
        type: COMPONENT_TYPE.SWITCH,
        props: {
          label,
          values: ["example 1", "example 2", "example 3"],
        },
      };
    default:
      return {
        type: COMPONENT_TYPE.INPUT_DEFAULT,
        props: { label: "", values: ["example 1", "example 2", "example 3"] },
      };
  }
};
