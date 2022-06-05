import { IComponent } from '../../types';

export interface IText extends IComponent {
    variant: 'title' | 'subTitle' | 'paragraph1' | 'paragraph2' | 'smallestException'
    tag?: string
    as?: any
    color?: string
    align?: 'center' | 'left' | 'right' | 'justify'
}
