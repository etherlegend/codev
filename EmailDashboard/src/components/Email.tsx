// CoDev - A GPT 4.0 A GPT 4.0 Virtual Developer, by twitter.com/@etherlegend

import React from 'react';
import { Typography } from '@mui/material';
import { Email as EmailType } from '../data/sampleEmails';

interface EmailProps {
  email: EmailType;
}

const Email: React.FC<EmailProps> = ({ email }) => {
  return (
    <>
      <Typography variant="h6">{email.subject}</Typography>
      <Typography variant="subtitle1">{email.sender}</Typography>
      <Typography variant="body1">{email.preview}</Typography>
    </>
  );
};

export default Email;
