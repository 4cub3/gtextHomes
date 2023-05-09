import { MapIcon, PhoneIcon, EnvelopeIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
interface Address {
    id: string;
    icon: React.ReactNode;
    desc: string;
}

export const NIGERIA_DATA: Address[] = [
    {
        id: '01',
        icon: <MapIcon className='w-6 h-6 text-white' />, 
        desc: 'Banana Island, Lagos, Nigeria',

    },
    {
        id: '02',
        icon: <PhoneIcon className='w-6 h-6 text-white'/>, 
        desc: '0700 483 984 6637',
    },
    {
        id: '03',
        icon: <EnvelopeIcon className='w-6 h-6 text-white'/>, 
        desc: 'info@gtexthomes.com',
    }
]
export const DUBAI_DATA: Address[] = [
    {
        id: '01',
        icon: <MapIcon className='w-6 h-6 text-white' />, 
        desc: 'Office 2404, Al Moosa Tower 2, Shehikh Zayed Road, Dubai',
        
    },
    {
        id: '02',
        icon: <PhoneIcon className='w-6 h-6 text-white'/>, 
        desc: '+971 58 521 0922',
    },
    {
        id: '03',
        icon: <EnvelopeIcon className='w-6 h-6 text-white'/>, 
        desc: 'info@gtexthomesdubai.com',
    },
    {
        id: '04',
        icon: <GlobeAltIcon className='w-6 h-6 text-white'/>, 
        desc: 'www.gtexthomesdubai.com',
    }
]

export const UK_DATA: Address[] = [
    {
        id: '01',
        icon: <MapIcon className='w-6 h-6 text-white' />, 
        desc: 'Office 2404, Al Moosa Tower 2, Shehikh Zayed Road, Dubai',
        
    },
    {
        id: '02',
        icon: <PhoneIcon className='w-6 h-6 text-white'/>, 
        desc: '+971 58 521 0922',
    },
    {
        id: '03',
        icon: <EnvelopeIcon className='w-6 h-6 text-white'/>, 
        desc: 'info@gtexthomesdubai.com',
    },
    {
        id: '04',
        icon: <GlobeAltIcon className='w-6 h-6 text-white'/>, 
        desc: 'www.gtexthomesdubai.com',
    }
]