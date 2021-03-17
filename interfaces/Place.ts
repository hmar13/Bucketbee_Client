export default interface Place {
  __typename: string;
  description: string;
  bucketId: string;
  catId: string;
  formatted_address: string;
  id: string;
  imgArr: string[] | undefined;
  international_phone_number: number | null;
  latitude: number;
  longitude: number;
  name: string;
  notes: string;
  open_now: boolean | null;
  rating: string | null;
  review: string | null;
  url: string;
  user_ratings_total: number | null;
  weekday_text: string[];
}
