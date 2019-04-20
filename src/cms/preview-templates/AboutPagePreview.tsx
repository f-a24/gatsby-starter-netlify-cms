import React from 'react';
import { AboutPageTemplate } from '../../templates/about-page';

export default ({ entry }) => (
  <AboutPageTemplate title={entry.getIn(['data', 'title'])} />
);
