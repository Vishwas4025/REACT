import { AppBar, Toolbar, Typography, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">Profile Manager</Typography>
        <Stack direction="row" spacing={2}>
          <Button component={Link} to="/" color="inherit">New Profile</Button>
          <Button component={Link} to="/profiles" color="inherit">All Profiles</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
