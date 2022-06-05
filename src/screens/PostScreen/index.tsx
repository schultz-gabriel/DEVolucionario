import React from 'react';

import {PostScreenWrapper, HeaderSection, ArticleSection} from './PostScreen.styled';
import PageWrapper from '../../components/layout/PageWrapper';

import { IPost } from './types';

const PostScreen = ({ post }:IPost) => {

  return (
    <>
      <PageWrapper>
        <PostScreenWrapper>
          <HeaderSection>
            <h1>{post.title}</h1>
            <>
                <time>{post.date}</time>
            </>
          </HeaderSection>
          <ArticleSection
            dangerouslySetInnerHTML={{
              __html: post.html,
            }}
          />
          {/* <div className="hiddenOnDesktop">
            <ScrollButton>
              Voltar ao topo
            </ScrollButton>
          </div>
          <div className="scroolButtonDesktop">
            <ScrollButton ghost>
              <img src="/images/up-arrow.png" alt="" style={{ width: '50px' }} />
            </ScrollButton>
          </div> */}
        </PostScreenWrapper>
      </PageWrapper>
    </>
  );
};

export default PostScreen;
