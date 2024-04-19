import TextField from "@mui/material/TextField";
import styles from "./input.module.css";

export type InputDefaultProps = {
  label: string;
};

export const InputDefaultComponent: React.FC<InputDefaultProps> = ({
  label,
}) => {
  return (
    <div className={styles.box}>
      <TextField
        id="standard-basic"
        label={label}
        variant="standard"
        fullWidth
      />
    </div>
  );
};
