export interface IMobileNavbar {
    openState: boolean;
}

export type MobileNavbarContextType = {
    openState: IMobileNavbar['openState']
    setOpenState: (openState: IMobileNavbar['openState']) => void;
}

export type DentalServices = {
    image: string;
    title: string;
    link?: string;
    last?: boolean;
}