import React from 'react';

interface HeroContextType{
    image: string;
    imageOne: string;
    border: boolean;
}
export const HeroContext = React.createContext<HeroContextType>({
    image: 'bg-living-room',
    border: false,
    imageOne: "bg-living-room"

})