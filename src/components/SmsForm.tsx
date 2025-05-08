import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

interface Props {
    onSend: (message: string) => void;
    onClear?: () => void;
}

// This component is responsible for rendering the form to send SMS messages.
const SmsForm: React.FC<Props> = ({ onSend, onClear }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSend(message);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
                label="Mensaje"
                multiline
                rows={4}
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
            >
                Enviar
            </Button>

            <Button
                type="button"
                variant="outlined"
                color="warning"
                sx={{ mt: 2, ml: 1 }}
                onClick={() => {
                    setMessage('');
                    onClear?.();
                }}
            >
                Limpiar
            </Button>

        </Box>
    );
};

export default SmsForm;
