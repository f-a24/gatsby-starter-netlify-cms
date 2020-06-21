import React, { FC } from 'react';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import { BlogPostTemplate } from '../../templates/blog-post';

const BlogPostPreview: FC<PreviewTemplateComponentProps> = ({
  entry,
  widgetFor
}) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
);

export default BlogPostPreview;
