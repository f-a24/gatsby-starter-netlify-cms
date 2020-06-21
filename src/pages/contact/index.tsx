import React, { useState } from 'react';
import { navigate } from 'gatsby-link';
import styled from 'styled-components';
import Layout from '../../components/Layout';

export default () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const encode = (data: { [key: string]: string }) =>
    Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  return (
    <Layout>
      <>
        <ContactHeader>Contact</ContactHeader>
        <StyledForm
          name="contact"
          method="post"
          action="/contact/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={e => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            fetch('/', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: encode({
                'form-name': form.getAttribute('name')!,
                ...state
              })
            })
              .then(() => navigate(form.getAttribute('action') as string))
              .catch(error => alert(error));
          }}
        >
          <div>
            <StyledLabel htmlFor="name">Your name</StyledLabel>
            <StyledRow>
              <StyledInput
                type="text"
                name="name"
                onChange={e => {
                  setState({ ...state, name: e.target.value });
                }}
                id="name"
                required
              />
            </StyledRow>
          </div>
          <div>
            <StyledLabel htmlFor="email">Email</StyledLabel>
            <StyledRow>
              <StyledInput
                type="email"
                name="email"
                onChange={e => {
                  setState({ ...state, email: e.target.value });
                }}
                id="email"
                required
              />
            </StyledRow>
          </div>
          <div>
            <StyledLabel htmlFor="message">Message</StyledLabel>
            <StyledRow>
              <StyledTextArea
                className="textarea"
                name="message"
                onChange={e => {
                  setState({ ...state, message: e.target.value });
                }}
                id="message"
                required
              />
            </StyledRow>
          </div>
          <div>
            <SendButton type="submit">Send</SendButton>
          </div>
        </StyledForm>
      </>
    </Layout>
  );
};

const ContactHeader = styled.h1`
  padding: 1rem;
  background: linear-gradient(
    to right bottom,
    rgb(242, 74, 164),
    rgb(0, 173, 254) 50%,
    rgba(255, 255, 255, 0) 51%
  );
  font-size: 2rem;
  color: #fff;
`;
const StyledForm = styled.form`
  width: 80%;
  margin: 2rem auto;
`;
const StyledRow = styled.div`
  margin: 1rem 0;
`;
const StyledInput = styled.input`
  width: 100%;
  border-radius: 3px;
  padding: 0.5rem 0.5rem;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  border: 1px solid #dbdbdb;
`;
const StyledTextArea = styled.textarea`
  width: 100%;
  border-radius: 3px;
  padding: 0.5rem 0.5rem;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  border: 1px solid #dbdbdb;
  max-height: 600px;
  min-height: 120px;
`;
const StyledLabel = styled.label`
  font-size: 1.5rem;
  font-weight: bold;
  color: rgb(242, 74, 164);
  background: linear-gradient(
    to right bottom,
    rgb(242, 74, 164),
    rgb(0, 173, 254)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SendButton = styled.button`
  color: #fff;
  padding: 0.5rem 1rem;
  background: linear-gradient(
    to right bottom,
    rgb(242, 74, 164),
    rgb(0, 173, 254)
  );
  border: none;
  cursor: pointer;
  border-radius: 3px;
`;
