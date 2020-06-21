import React, { FC } from 'react';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import { AboutPageTemplate } from '../../templates/about-page';

const AboutPagePreview: FC<PreviewTemplateComponentProps> = ({ entry }) => (
  <AboutPageTemplate title={entry.getIn(['data', 'title'])} />
);

export default AboutPagePreview;
