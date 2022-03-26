import TextField from "@mui/material/TextField";

export default function PasswordText() {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      name="password"
      label="Password"
      type="password"
      id="password"
      autoComplete="current-password"
      variant="outlined"
    />
  );
}
