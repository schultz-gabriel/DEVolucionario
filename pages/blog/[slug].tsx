import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next'

import websitePageHOC from '../../src/wrappers/websitePage/hoc';
import PostScreen from '../../src/screens/PostScreen';

import { IPost } from '../../src/screens/PostScreen/types';

import posts from '../../blog_posts.json';

function PostPage({ post }:IPost) {
  return (
    <PostScreen post={post} />
  );
}

export default websitePageHOC(PostPage);

export const getStaticProps:GetStaticProps = async ({ params }:any) => {
  const pageData:any = posts.reduce((accumulatedValues, post) => {
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

export const getStaticPaths:GetStaticPaths = () => {
  const paths = posts.reduce((accumulatedValues:any, post) => {
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
