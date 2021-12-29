import React from 'react';

import blogPosts from '../../../blog_posts';

import PostCard from '../../components/commons/PostCard';
import PostList from './style/BlogWrapper';
import ContentBox from '../../components/commons/ContentBox';

const BlogScreen = () => (
  <ContentBox>
    <PostList>
      {blogPosts.map((item) => (<PostCard key={item.title} item={item} />))}
    </PostList>
  </ContentBox>
);

export default BlogScreen;
