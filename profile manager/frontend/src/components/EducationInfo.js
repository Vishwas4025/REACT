import { TextField, Button, Stack, Box } from '@mui/material';

export default function EducationInfo({ state, dispatch, nextStep, prevStep }) {
  const handleChange = (e) => {
    dispatch({
      type: 'SET_EDUCATION_INFO',
      payload: { [e.target.name]: e.target.value },
    });
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto' }}>
        <h2>Step 2: Education Info</h2>
      <Stack spacing={3}>
        <TextField label="Degree" name="degree" value={state.degree} onChange={handleChange} fullWidth />
        <TextField label="Institution" name="institution" value={state.institution} onChange={handleChange} fullWidth />
        <TextField label="Year" name="year" value={state.year} onChange={handleChange} fullWidth />
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
