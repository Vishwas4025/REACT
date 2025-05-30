import { TextField, Button, Stack, Box } from '@mui/material';

export default function PersonalInfo({ state, dispatch, nextStep }) {
  const handleChange = (e) => {
    dispatch({
      type: 'SET_PERSONAL_INFO',
      payload: { [e.target.name]: e.target.value },
    });
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto' }}>
        <h2>Step 1: Personal Info</h2>
      <Stack spacing={3}>
        <TextField label="Name" name="name" value={state.name} onChange={handleChange} fullWidth />
        <TextField label="Email" name="email" value={state.email} onChange={handleChange} fullWidth />
        <TextField label="Phone" name="phone" value={state.phone} onChange={handleChange} fullWidth />
      </Stack>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, mt: 4 }}>
        <Button variant="outlined" disabled sx={{ color: 'gray', borderColor: 'gray' }}>
          Previous
        </Button>
        <Button variant="contained" onClick={nextStep}>
          Next
        </Button>
      </Box>
    </Box>
  );
}
