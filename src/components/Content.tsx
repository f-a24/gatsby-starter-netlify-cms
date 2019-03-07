import React from 'react';

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

export default ({ content, className }) => (
  <div className={className}>{content}</div>
);
