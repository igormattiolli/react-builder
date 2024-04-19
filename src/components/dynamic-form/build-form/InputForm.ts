import { CheckboxProps } from "./checkbox/CheckboxComponent";
import { DropdownInputProps } from "./dropdown-input/DropdownInputComponent";
import { InputDefaultProps } from "./input-default/InputDefaultComponent";
import { SwitchProps } from "./switch/SwitchComponent";
import { ReactNode } from "react";

export interface InputForm {
  component: ReactNode;
}

export enum COMPONENT_TYPE {
  DROPDOWN_INPUT = "dropdownInput",
  CHECKBOX = "checkbox",
  INPUT_DEFAULT = "inputDefault",
  SWITCH = "switch",
}

export type Property = {
  type: COMPONENT_TYPE;
  props: CheckboxProps & DropdownInputProps & InputDefaultProps & SwitchProps;
};

export type Properties = Property[];
