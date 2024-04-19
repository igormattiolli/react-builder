import TextField from "@mui/material/TextField";

export type InputDefaultProps = {
  label: string;
};

export const InputDefaultComponent: React.FC<InputDefaultProps> = () => {
  return (
    <TextField
      id="standard-basic"
      label="Standard"
      variant="standard"
      fullWidth
    />
  );
};
