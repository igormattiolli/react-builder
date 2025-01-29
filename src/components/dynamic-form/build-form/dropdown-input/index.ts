import { ReactNode } from "react";

import { InputForm } from "../InputForm";
import {
  DropdownInputComponent,
  DropdownInputProps,
} from "./DropdownInputComponent";

export class DropdownInput implements InputForm {
  component: ReactNode;

  constructor(props: DropdownInputProps) {
    this.component = DropdownInputComponent(props);
  }
}
