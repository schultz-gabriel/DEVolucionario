import styled, { css } from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';
import breakpointMedia from '../../../../theme/utils/breakpointMedia';

const TextArea = styled.div`
width:100%;
margin:0;
display:flex;
justify-content: space-around;
align-items:center;
flex-wrap:wrap;

${breakpointMedia({
    xs: css`
    padding: 0 10px;
    `,
    sm: css`
    padding: 0 20px;
    `,
    md: css`
    width:100%;
    padding: 0 20px;
    `,
  })};
`;

TextArea.ContentCol = styled.div`
width:100%;
margin:0;
display:flex;
flex-direction: column;
text-align: center;

${breakpointMedia({
    lg: css`    
    ${({ fullWidth }) => (fullWidth
    ? css`width: 100%;`
    : css`width: 60%;`)
}
    `,
  })};
`;

TextArea.DecorativeCol = styled.div`
width:100%;
margin:0;
display:none;

${breakpointMedia({
    lg: css`
        ${propToStyle('maxWidth')}
        display:flex;
        flex-direction:column;
    `,
  })};
`;

export { TextArea as default };
