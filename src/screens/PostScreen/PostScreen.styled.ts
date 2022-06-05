import styled, { css } from 'styled-components';
import breakpointMedia from '../../theme/utils/breakpointMedia';

export const PostScreenWrapper = styled.main`
width: 100%;

p, h1, h2, h3, h4, h5, h6, figcaption{
  color: ${({ theme }) => theme.color};
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
  margin: 3rem 0 1rem 0 ;
}

p{
  font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
  font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
  line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
  margin-bottom: 1em;
}

figure{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

figcaption{
  font-size: ${({ theme }) => theme.typographyVariants.paragraph2.fontSize};
  font-weight: ${({ theme }) => theme.typographyVariants.paragraph2.fontWeight};
  line-height: ${({ theme }) => theme.typographyVariants.paragraph2.lineHeight};
  text-align: center;
}

a{
  color: ${({ theme }) => theme.color};
}

${breakpointMedia({
    xs: css`
    `,
    sm: css`
    `,
    md: css`
    width: 50%;

    `,
    lg: css`
    
    `,
    xl: css`
    `,
  })};

`;

export const HeaderSection = styled.header`

border-bottom: 1px double ${({ theme }) => theme.color};
padding-bottom: 1rem;
margin-bottom: 2rem;
width: 100%;

.author{
  display: flex;
  width: fit-content;
}

.author__image{
  width:50px;
  border-radius: 50%;
}

`;

export const ArticleSection = styled.section`
width: 100%;

.center{
  align-items: center;
  display: flex;
  justify-content: center;
  /* margin: 1em 0; */
  width: 100%;
}

.center figure img{
  width: 100%;
}

.podcast{
  width: 80%;
  height: 50px;
}

figure{
  margin: 0;
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

.

`;

