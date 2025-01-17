import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  subject: string;
  text: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  subject,
  text
}) => (
  <div>
    <h2 className='text-black'>Name: {name}!</h2>
    <h3 className='text-black'>Subject: {subject}</h3>
    <p className='text-xl'>Message: {text}</p>
  </div>
);
