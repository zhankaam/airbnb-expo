type RoomsType = Record<'guests' | 'bedrooms' | 'bedroom' | 'beds' | 'bed' | 'baths', number>;
type ReviewType = Record<'userName' | 'date' | 'coment', string>;

export type HotelType = {
  id: number;
  name: string;
  address: string;
  description: string;
  rooms: Partial<RoomsType>;
  hostType: string;
  rating: number;
  reviews: ReviewType[];
  pictures: string[];
};
