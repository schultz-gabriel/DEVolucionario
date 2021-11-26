import React from 'react';
// import PropTypes from 'prop-types';
import posts from '../../../blog_posts';
import PostCard from '../../components/commons/PostCard';

import ContentBox from '../../components/commons/ContentBox';

const BlogScreen = () => (
  <ContentBox>
    <PostCard items={posts} />
  </ContentBox>
);

BlogScreen.propTypes = {

};

export default BlogScreen;
