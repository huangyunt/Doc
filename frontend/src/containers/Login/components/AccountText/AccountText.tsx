import TextField from "@mui/material/TextField";
export default function AccountText() {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus
      variant="outlined"
      // size="small"
      // InputProps={{
      //   startAdornment: (
      //     <InputAdornment position="start">
      //       <AccountCircle />
      //     </InputAdornment>
      //   ),
      // }}
    />
  );
}
