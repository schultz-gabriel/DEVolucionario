import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';

const Box = styled.div`
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('placeItems')}
  ${propToStyle('margin')}
  ${propToStyle('padding')}
  ${propToStyle('alignItems')}
  ${propToStyle('flexWrap')}
  ${propToStyle('width')}
  ${propToStyle('maxWidth')}
  ${propToStyle('height')}
  ${propToStyle('textAlign')}
`;

export default Box;
