import { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Paper, Stack, CircularProgress, List, ListItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function AllProfiles() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://192.168.29.202:5000/api/profiles')
      .then((res) => {
        setProfiles(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <>
      <Typography variant="h4" gutterBottom>All Profiles</Typography>
      <Stack spacing={2}>
        {profiles.map((profile) => (
          <List
            key={profile._id}
            sx={{ p: 2, cursor: 'pointer' }}
            onClick={() => navigate(`/profile/${profile._id}`)}
            elevation={2}
          >
            <ListItem variant="h6"  sx={{ fontWeight: 'bold' }}>{profile.name}</ListItem>
            <ListItem>{profile.email}</ListItem>
          </List>
        ))}
      </Stack>
    </>
  );
}
