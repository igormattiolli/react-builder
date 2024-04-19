import { ReactNode } from "react";

import { InputForm } from "../InputForm";
import { SwitchComponent, SwitchProps } from "./SwitchComponent";

export class Switch implements InputForm {
  component: ReactNode;

  constructor(props: SwitchProps) {
    this.component = SwitchComponent(props);
  }
}
