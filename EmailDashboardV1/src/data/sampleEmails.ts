// CoDev - A GPT 4.0 A GPT 4.0 Virtual Developer, by twitter.com/@etherlegend

export interface Email {
    id: number;
    sender: string;
    subject: string;
    preview: string;
  }
  
  export const sampleEmails: Email[] = [
    {
      id: 1,
      sender: 'John Doe',
      subject: 'Welcome to the Dashboard App',
      preview: 'This is a sample email for your new dashboard app...',
    },
    {
      id: 2,
      sender: 'Jane Smith',
      subject: 'Important Updates',
      preview: 'We have some important updates to share with you...',
    },
    {
      id: 3,
      sender: 'Mike Johnson',
      subject: 'Meeting Reminder',
      preview: 'This is a friendly reminder about our meeting today...',
    },
  ];
  