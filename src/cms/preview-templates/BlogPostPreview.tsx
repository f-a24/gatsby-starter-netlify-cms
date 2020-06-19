import React, { FC } from 'react';
import { BlogPostTemplate } from '../../templates/blog-post';

type Props = {
  entry: {
    getIn<T extends string>(
      arg: ['data', T]
    ): T extends 'tags' ? string[] : string;
  };
  widgetFor(arg: string): string;
};

const BlogPostPreview: FC<Props> = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
);

export default BlogPostPreview;
