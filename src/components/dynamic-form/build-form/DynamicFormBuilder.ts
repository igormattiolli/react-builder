import { ReactNode } from "react";
import { FormBuilder } from "./Builder";
import { Properties } from "./InputForm";

export class DynamicFormBuilder {
  private formBuilder: FormBuilder;

  constructor() {
    this.formBuilder = FormBuilder.init();
  }

  execute({ inputsValues }: { inputsValues: Properties }): ReactNode[] {
    inputsValues.forEach((value) => {
      this.formBuilder = this.formBuilder[value.type](value.props);
    });
    return this.formBuilder.build();
  }
}
