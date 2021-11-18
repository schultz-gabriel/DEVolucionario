import styled, { css } from 'styled-components';
import breakpointMedia from '../../../theme/utils/breakpointMedia';

const PostScreenWrapper = styled.main`

p, h1, h2, h3, h4, h5, h6, figcaption{
  color: ${({ theme }) => theme.secondary.main.color};
}

h1{
  font-size: ${({ theme }) => theme.typographyVariants.title.fontSize};
  font-weight: ${({ theme }) => theme.typographyVariants.title.fontWeight};
  line-height: ${({ theme }) => theme.typographyVariants.title.lineHeight};
  text-align: center;
}

h2, h3{
  font-size: ${({ theme }) => theme.typographyVariants.subTitle.fontSize};
  font-weight: ${({ theme }) => theme.typographyVariants.subTitle.fontWeight};
  line-height: ${({ theme }) => theme.typographyVariants.subTitle.lineHeight};
}

p{
  font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
  font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
  line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
  margin-bottom: 1em;
}

figcaption{
  font-size: ${({ theme }) => theme.typographyVariants.paragraph2.fontSize};
  font-weight: ${({ theme }) => theme.typographyVariants.paragraph2.fontWeight};
  line-height: ${({ theme }) => theme.typographyVariants.paragraph2.lineHeight};
  text-align: center;
}

${breakpointMedia({
    xs: css`
    padding: 0 10px;
    `,
    sm: css`
    padding: 0 20px;
    `,
    md: css`
    width:100%;
    padding: 0 100px;
    `,
  })};

`;

PostScreenWrapper.HeaderSection = styled.header`

border-bottom: 1px double ${({ theme }) => theme.secondary.main.color};
padding-bottom: 2rem;
margin-bottom: 2rem;

.author{
  display: flex;
  width: fit-content;
}

.author__image{
  width:50px;
  border-radius: 50%;
}

`;

PostScreenWrapper.ArticleSection = styled.section`
width: 100%;

.center{
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 1em 0;
  width: 100%;
}

.podcast{
  width: 80%;
  height: 50px;
}

${breakpointMedia({
    xs: css`
    `,
    sm: css`
    `,
    md: css`
.video{
  width: 560px;
  height: 315px;
}
    `,
  })};


`;

export { PostScreenWrapper as default };
