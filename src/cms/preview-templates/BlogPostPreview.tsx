import React from 'react';
import { BlogPostTemplate } from '../../templates/blog-post';

export default ({
  entry,
  widgetFor
}: {
  entry: {
    getIn(arg: string[]): string | string[];
  };
  widgetFor(arg: string): string;
}) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description']) as string}
    tags={entry.getIn(['data', 'tags']) as string[]}
    title={entry.getIn(['data', 'title']) as string}
  />
);
