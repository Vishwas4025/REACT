import { TextField, Button, Stack, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Achievements({ state, dispatch, prevStep }) {
  const navigate = useNavigate();

  const handleChange = (e) => {
    dispatch({
      type: 'SET_ACHIEVEMENTS',
      payload: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://192.168.29.202:5000/api/profiles', state);
      dispatch({ type: 'RESET' });
      navigate('/profiles');
    } catch (err) {
      console.error(err);
      alert('Failed to submit profile');
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto' }}>
        <h2>Step 4: Achievements</h2>
      <Stack spacing={3}>
        <TextField
          label="Achievements (comma-separated)"
          name="achievements"
          value={state.achievements}
          onChange={handleChange}
          fullWidth
        />
      </Stack>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, mt: 4 }}>
        <Button variant="outlined" onClick={prevStep}>
          Previous
        </Button>
        <Button variant="contained" onClick={handleSubmit} sx={{ backgroundColor: 'green', color: 'white', '&:hover': { backgroundColor: 'darkgreen' } }}>
            Submit
        </Button>

      </Box>
    </Box>
  );
}
