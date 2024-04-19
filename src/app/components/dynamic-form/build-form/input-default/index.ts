import { ReactNode } from "react";

import { InputForm } from "../InputForm";
import {
  InputDefaultComponent,
  InputDefaultProps,
} from "./InputDefaultComponent";

export class InputDefault implements InputForm {
  component: ReactNode;

  constructor(props: InputDefaultProps) {
    this.component = InputDefaultComponent(props);
  }
}
