import { ReactNode } from "react";

import { InputForm } from "../InputForm";
import { CheckboxComponent, CheckboxProps } from "./CheckboxComponent";

export class Checkbox implements InputForm {
  component: ReactNode;

  constructor(props: CheckboxProps) {
    this.component = CheckboxComponent(props);
  }
}
