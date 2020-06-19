import React, { FC } from 'react';
import { AboutPageTemplate } from '../../templates/about-page';

type Props = {
  entry: {
    getIn(arg: ['data', 'title']): string;
  };
};

const AboutPagePreview: FC<Props> = ({ entry }) => (
  <AboutPageTemplate title={entry.getIn(['data', 'title'])} />
);

export default AboutPagePreview;
