import { ReactNode } from 'react';

export interface ISeoProps {
    seoProps: {
        headTitle: string,
        prevImage: string,
    },
}

export interface IWebsitePage extends ISeoProps {
    children: ReactNode,
    toggleTheme: () => void
    theme: {
        color?: string
        menuBG?: string
    }
}
