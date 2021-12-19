import React from 'react';

import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import PostScreen from '../../src/screens/PostScreen';

import posts from '../../blog_posts';

function PostPage({ post }) {
  return (
    <PostScreen post={post} />
  );
}

PostPage.propTypes = PostScreen.propTypes;

export default websitePageHOC(PostPage);

export async function getStaticProps({ params }) {
  const pageData = posts.reduce((accumulatedValues, post) => {
    const foundPost = post.slug === params.slug;

    if (foundPost) {
      return {
        accumulatedValues,
        postData: post,
      };
    }
    return accumulatedValues;
  }, {});
  return {
    props: {
      post: pageData.postData,
      pageWrapperProps: {
        seoProps: {
          headTitle: pageData.postData.title,
          prevImage: pageData.postData.preview,
        },
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = posts.reduce((accumulatedValues, post) => {
    const projectSlug = post.slug;
    return [
      ...accumulatedValues,
      { params: { slug: projectSlug } },
    ];
  }, []);

  return {
    paths,
    fallback: false,
  };
}
