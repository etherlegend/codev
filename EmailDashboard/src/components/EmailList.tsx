// CoDev - A GPT 4.0 A GPT 4.0 Virtual Developer, by twitter.com/@etherlegend

import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { sampleEmails } from '../data/sampleEmails';
import Email from './Email';

const EmailList: React.FC = () => {
  return (
    <List>
      <Typography variant="h4" gutterBottom>
        Emails
      </Typography>
      {sampleEmails.map((email) => (
        <ListItem key={email.id}>
          <ListItemText>
            <Email email={email} />
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default EmailList;
