import { TextField, Button, Stack, Box } from '@mui/material';

export default function Interests({ state, dispatch, nextStep, prevStep }) {
  const handleChange = (e) => {
    dispatch({
      type: 'SET_INTERESTS',
      payload: e.target.value,
    });
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto' }}>
        <h2>Step 3: Interests</h2>
      <Stack spacing={3}>
        <TextField
          label="Interests (comma-separated)"
          name="interests"
          value={state.interests}
          onChange={handleChange}
          fullWidth
        />
      </Stack>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, mt: 4 }}>
        <Button variant="outlined" onClick={prevStep}>
          Previous
        </Button>
        <Button variant="contained" onClick={nextStep}>
          Next
        </Button>
      </Box>
    </Box>
  );
}
