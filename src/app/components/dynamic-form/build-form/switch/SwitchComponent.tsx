import { FormControlLabel } from "@mui/material";
import Switch from "@mui/material/Switch";

export type SwitchProps = {
  label: string;
};

const label = { inputProps: { "aria-label": "Switch demo" } };

export const SwitchComponent: React.FC<SwitchProps> = ({ label }) => {
  return <FormControlLabel control={<Switch />} label={label} />;
};
