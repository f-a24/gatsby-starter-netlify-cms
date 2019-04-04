import React from 'react';

export const HTMLContent = ({
  content,
  className
}: {
  content: string;
  className: string;
}) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

export default ({
  content,
  className
}: {
  content: string;
  className: string;
}) => <div className={className}>{content}</div>;
