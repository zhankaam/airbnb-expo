import { AxiosResponse } from 'axios';

import { http } from '..';
import { HotelType } from './types';

export const getHotels = (): Promise<AxiosResponse<HotelType[]>> =>
  http.get('hotels', {}).then(res => res.data);
