import 'styled-components';
import { dark } from './themes';

export type Themes = typeof dark;

declare module 'styled-components' {
  export interface DefaultTheme extends Themes { }
}
