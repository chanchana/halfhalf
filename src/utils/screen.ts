import { useMediaQuery } from 'react-responsive'

export interface IScreen {
    isMobile: boolean
    isTablet: boolean
    isDesktop: boolean
}

export const useScreen = ():IScreen => {
    const isDesktop = useMediaQuery({ minWidth: 1024 })
    const isTablet = useMediaQuery({ maxWidth: 1023, minWidth: 768 })
    const isMobile = useMediaQuery({ maxWidth: 767 })

    return {
        isMobile,
        isTablet,
        isDesktop,
    }
}