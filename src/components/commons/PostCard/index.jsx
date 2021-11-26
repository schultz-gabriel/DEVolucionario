import React from 'react';
import PropTypes from 'prop-types';

import CardWrapper from './style/PostCardWrapper';
import Box from '../../foundation/layout/Box';
import Text from '../../foundation/text';
import Link from '../../foundation/link';

const PostCard = (props) => {
  const { items } = props;

  return (
    <CardWrapper>
      {items.map((item) => (
        <li key={item.title}>
          <Link
            href={`/blog/${item.slug}`}
          >
            <Box
              className="link"
              display="flex"
              justifyContent="space-between"
              width="100%"
              padding="20px"
              alignItems="center"
            >
              <Box
                display="flex"
                flexDirection="column"
                textAlign="left"
              >
                <Text
                  variant="subTitle"
                  tag="h3"
                  color="secondary.main"
                  textAlign="left"
                  textShadow="2px 2px 3px #808080"
                >
                  {item.title}
                </Text>
                <Text
                  variant="paragraph1"
                  tag="p"
                  color="secondary.main"
                  textAlign="justify"
                >
                  {item.type}
                </Text>
              </Box>
              <Box
                display="grid"
                placeItems="center"
              >
                <svg className="arrow" viewBox="0 0 75 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.875 49.5834L53.125 20.4167" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21.875 20.4167H53.125V49.5834" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Box>
            </Box>
          </Link>
        </li>
      ))}
    </CardWrapper>
  );
};

PostCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array.isRequired,
};

export default PostCard;
