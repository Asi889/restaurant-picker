export interface TenBisRestaurant {
    description?: string
    image: string
    title: string
    track_id: string
    name: string;

    address: string;
    venue_id: string;
    location:number[];
    short_description: string;
    slug: string;
    tags: string[];
    link:{
        url: string;
    }
}