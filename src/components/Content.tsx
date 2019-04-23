import React from 'react';
import styled from 'styled-components';

export const HTMLContent = ({
  content,
  className
}: {
  content: string;
  className: string;
}) => (
  <StyledDiv
    className={className}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

export default ({
  content,
  className
}: {
  content: string;
  className: string;
}) => <StyledDiv className={className}>{content}</StyledDiv>;

const StyledDiv = styled.div`
  * {
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 1.75rem;
  }
  ol {
    list-style-type: decimal;
    padding-inline-start: 40px;
  }
`;
