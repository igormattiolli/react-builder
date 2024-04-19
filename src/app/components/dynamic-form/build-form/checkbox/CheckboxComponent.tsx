import { FormControlLabel, FormGroup } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

export type CheckboxProps = {
  label: string;
};

export const CheckboxComponent: React.FC<CheckboxProps> = ({ label }) => {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label={label} />
    </FormGroup>
  );
};
