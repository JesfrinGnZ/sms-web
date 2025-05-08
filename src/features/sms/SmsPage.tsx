import React, { useState } from 'react';
import SmsForm from '../../components/SmsForm';
import { sendSms } from '../../api/smsApi';
import { Box, Button, Container, List, ListItem, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// This component is responsible for rendering the SMS page, which includes the form to send SMS and the list of parts received.
const SmsPage: React.FC = () => {

  const navigate = useNavigate();

  const [parts, setParts] = useState<string[]>([]);

  const handleSend = async (message: string) => {
    const res = await sendSms(message);
    setParts(res.data.parts || []);
  };

  const handleClear = () => {
    setParts([]);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={4} mb={2}>
        <Typography variant="h4">Send SMS</Typography>
        <Button variant="outlined" color="secondary" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
      <SmsForm onSend={handleSend} onClear={handleClear} />
      <List>
        {parts.map((p, i) => (
          <ListItem key={i}>
            <Paper elevation={1} sx={{ p: 2, width: '100%' }}>{p}</Paper>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default SmsPage;
