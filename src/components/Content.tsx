import * as React from 'react';
import styled from 'styled-components';

type HTMLContentPropsType = {
  content: string;
  className: string;
};

type ContentPropsType = {
  content: JSX.Element;
  className: string;
};

export const HTMLContent: React.FC<HTMLContentPropsType> = ({
  content,
  className
}) => (
  <StyledDiv
    className={className}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

const Content: React.FC<ContentPropsType> = ({ content, className }) => (
  <StyledDiv className={className}>{content}</StyledDiv>
);

export default Content;

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
