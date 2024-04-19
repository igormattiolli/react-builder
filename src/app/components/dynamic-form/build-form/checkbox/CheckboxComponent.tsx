import { FormControlLabel, FormGroup } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import styles from "./checkbox.module.css";

export type CheckboxProps = {
  label: string;
};

export const CheckboxComponent: React.FC<CheckboxProps> = ({ label }) => {
  return (
    <div className={styles.box}>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label={label} />
      </FormGroup>
    </div>
  );
};
