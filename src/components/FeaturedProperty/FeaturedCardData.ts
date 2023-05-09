import image from '../../assets/images/Living-room4.jpg';
import image1 from '../../assets/galleryImages/aubrey-odom-ITzfgP77DTg-unsplash.jpg';
import image2 from '../../assets/galleryImages/brian-babb-XbwHrt87mQ0-unsplash.jpg';
import image3 from '../../assets/galleryImages/debby-hudson-FmCSSSGge-0-unsplash.jpg';
import image4 from '../../assets/galleryImages/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg';
import image5 from '../../assets/galleryImages/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg';
interface FeaturedData {
    id: string;
    image: string;
    propertyTitle:string;
    propertyLocation: string;
    property:{type:string, status:string}
}

export const DUMMY_PROPERTIES:FeaturedData[] =[
    {
        id: '01',
        image : image,
        propertyTitle: 'Jasper Garden',
        propertyLocation: 'ibeju lekki',
        property: {type: 'land', status: 'for sale'},
    },
    {
        id: '02',
        image : image2,
        propertyTitle: 'Saphire',
        propertyLocation: 'Water City Abuja',
        property: {type: 'land', status: 'for Lease'},
    },
    {
        id: '03',
        image : image3,
        propertyTitle: 'Prime House',
        propertyLocation: 'Lakowe Lekki Lagos',
        property: {type: 'land', status: 'for sale'},
    }, {
        id: '04',
        image : image4,
        propertyTitle: 'White House',
        propertyLocation: 'Epe',
        property: {type: 'land', status: 'for sale'},
    },
    {
        id: '05',
        image : image5,
        propertyTitle: 'Jasper Sun City',
        propertyLocation: 'ibeju lekki',
        property: {type: 'land', status: 'for sale'},
    },
    {
        id: '06',
        image : image1,
        propertyTitle: 'Beryl Golf',
        propertyLocation: 'Moniya Ibadan',
        property: {type: 'land', status: 'For Lease'},
    },
   
    
] 