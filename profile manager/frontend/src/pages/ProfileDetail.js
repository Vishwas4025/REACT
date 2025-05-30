// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Typography, Box, CircularProgress, Stack } from '@mui/material';

// export default function ProfileDetail() {
//   const { id } = useParams();
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get(`http://localhost:5000/api/profiles/${id}`)
//       .then((res) => {
//         setProfile(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) return <CircularProgress />;
//   if (!profile) return <Typography>Profile not found.</Typography>;

//   return (
//     <Box sx={{ maxWidth: 700, mx: 'auto', mt: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Profile of {profile.name}
//       </Typography>

//       {/* Personal Info Section */}
//       <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
//         Personal Info
//       </Typography>
//       <Stack spacing={1} sx={{ pl: 2 }}>
//         <Typography>
//           <strong>Email</strong>
//         </Typography>
//         <Typography>{profile.email}</Typography>
//         <Typography>
//           <strong>Phone</strong>
//         </Typography>
//         <Typography>{profile.phone}</Typography>
//       </Stack>

//       {/* Education Section */}
//       <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
//         Education
//       </Typography>
//       <Stack spacing={1} sx={{ pl: 2 }}>
//         <Typography>
//           <strong>Degree</strong>
//         </Typography>
//         <Typography>{profile.degree}</Typography>
//         <Typography>
//           <strong>Institution</strong>
//         </Typography>
//         <Typography>{profile.institution}</Typography>
//         <Typography>
//           <strong>Year</strong>
//         </Typography>
//         <Typography>{profile.year}</Typography>
//       </Stack>

//       {/* Interests Section */}
//       <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
//         Interests
//       </Typography>
//       <Typography sx={{ pl: 2 }}>{profile.interests}</Typography>

//       {/* Achievements Section */}
//       <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
//         Achievements
//       </Typography>
//       <Typography sx={{ pl: 2 }}>{profile.achievements}</Typography>
//     </Box>
//   );
// }











// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Typography, Box, CircularProgress } from '@mui/material';

// export default function ProfileDetail() {
//   const { id } = useParams();
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get(`http://localhost:5000/api/profiles/${id}`)
//       .then((res) => {
//         setProfile(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) return <CircularProgress />;
//   if (!profile) return <Typography>Profile not found.</Typography>;

//   return (
//     <Box sx={{ maxWidth: 700, mx: 'auto', mt: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Profile of {profile.name}
//       </Typography>

//       <Typography variant="h6" sx={{ mt: 4 }}>Personal Info</Typography>
//       <Typography>Email</Typography>
//       <Typography>{profile.email}</Typography>
//       <Typography>Phone</Typography>
//       <Typography>{profile.phone}</Typography>

//       <Typography variant="h6" sx={{ mt: 4 }}>Education</Typography>
//       <Typography>Degree</Typography>
//       <Typography>{profile.degree}</Typography>
//       <Typography>Institution</Typography>
//       <Typography>{profile.institution}</Typography>
//       <Typography>Year</Typography>
//       <Typography>{profile.year}</Typography>

//       <Typography variant="h6" sx={{ mt: 4 }}>Interests</Typography>
//       <Typography>{profile.interests}</Typography>

//       <Typography variant="h6" sx={{ mt: 4 }}>Achievements</Typography>
//       <Typography>{profile.achievements}</Typography>
//     </Box>
//   );
// }









import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProfileDetail() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://192.168.29.202:5000/api/profiles/${id}`)
      .then((res) => {
        setProfile(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!profile) return <p>Profile not found.</p>;

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <h2>Profile of {profile.name}</h2>

      <h4>Personal Info</h4>
      <p>Email</p>
      <p>{profile.email}</p>
      <p>Phone</p>
      <p>{profile.phone}</p>

      <h4>Education</h4>
      <p>Degree</p>
      <p>{profile.degree}</p>
      <p>Institution</p>
      <p>{profile.institution}</p>
      <p>Year</p>
      <p>{profile.year}</p>

      <h4>Interests</h4>
      <p>{profile.interests}</p>

      <h4>Achievements</h4>
      <p>{profile.achievements}</p>
    </div>
  );
}
