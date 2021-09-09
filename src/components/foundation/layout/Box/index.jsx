import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';

const Box = styled.div`
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('margin')}
  ${propToStyle('padding')}
  ${propToStyle('alignItems')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
  ${propToStyle('backgroundSize')}
  ${propToStyle('width')}
  ${propToStyle('maxWidth')}
  ${propToStyle('height')}
  ${propToStyle('textAlign')}
`;
export { Box as default };
