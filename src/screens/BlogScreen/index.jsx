import React from 'react';
// import PropTypes from 'prop-types';
import posts from '../../../blog_posts';
import PostCard from '../../components/commons/PostCard';

import ContentWrapper from '../../components/commons/ContentBox';

const BlogScreen = () => (
  <ContentWrapper>
    <PostCard items={posts} />
  </ContentWrapper>
);

BlogScreen.propTypes = {

};

export default BlogScreen;
