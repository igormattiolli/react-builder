import { InputForm } from "./InputForm";
import { InputDefault } from "./input-default";
import { DropdownInput } from "./dropdown-input";
import { Checkbox } from "./checkbox";
import { Switch } from "./switch";
import { DropdownInputProps } from "./dropdown-input/DropdownInputComponent";
import { InputDefaultProps } from "./input-default/InputDefaultComponent";
import { SwitchProps } from "./switch/SwitchComponent";
import { CheckboxProps } from "./checkbox/CheckboxComponent";
import { ReactNode } from "react";

export class FormBuilder {
  private constructor(private readonly components: InputForm[]) {}

  static init(): FormBuilder {
    return new FormBuilder([]);
  }

  inputDefault(props: InputDefaultProps): FormBuilder {
    this.components.push(new InputDefault(props));
    return this;
  }

  dropdownInput(props: DropdownInputProps): FormBuilder {
    this.components.push(new DropdownInput(props));
    return this;
  }

  switch(props: SwitchProps): FormBuilder {
    this.components.push(new Switch(props));
    return this;
  }

  checkbox(props: CheckboxProps): FormBuilder {
    this.components.push(new Checkbox(props));
    return this;
  }

  build(): ReactNode[] {
    return this.components.map((c) => c.component);
  }
}
