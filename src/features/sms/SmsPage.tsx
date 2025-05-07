import React, { useState } from 'react';
import SmsForm from '../../components/SmsForm';
import { sendSms } from '../../api/smsApi';
import { Container, List, ListItem, Paper, Typography } from '@mui/material';

// This component is responsible for rendering the SMS page, which includes the form to send SMS and the list of parts received.
const SmsPage: React.FC = () => {
  const [parts, setParts] = useState<string[]>([]);

  const handleSend = async (message: string) => {
    const res = await sendSms(message);
    setParts(res.data.parts || []);
  };

  const handleClear = () => {
    setParts([]);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Enviar SMS
      </Typography>
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
