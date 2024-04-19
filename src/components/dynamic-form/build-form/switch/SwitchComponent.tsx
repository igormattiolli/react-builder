import { FormControlLabel } from "@mui/material";
import Switch from "@mui/material/Switch";
import styles from "./switch.module.css";

export type SwitchProps = {
  label: string;
};

export const SwitchComponent: React.FC<SwitchProps> = ({ label }) => {
  return (
    <div className={styles.box}>
      <FormControlLabel control={<Switch />} label={label} />
    </div>
  );
};
