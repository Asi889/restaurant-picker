export interface FetchRestaurantType {
  city: {
    name: string;
    citySlug: string;
    lat: string;
    lon: string;
  };
  woltData: RestaurantType[];
  tenBisData: RestaurantType[];
}

export interface RestaurantType {
  description?: string;
  photo: {
    image: string | null;
    logo: string | null;
  };
  title: string;
  track_id: string;
  name: string;

  address: string;
  venue_id: string;
  location: number[];
  short_description: string;
  slug: string;
  tags: string[];
  link: {
    url: string;
  };
  score: number;
  provider: "wolt" | "tenBis";
}
