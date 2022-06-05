import { IComponent } from '../../types';

export interface IButton extends IComponent {
    fullWidth?: boolean,
    ghost?: boolean,
    as?: any
    href?: string
    onClick?: () => void
}
