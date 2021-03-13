import Place from './Place';
import Category from './Category';

export default interface Bucket {
  __typename: string;
  categories: Category[];
  places: Place[];
  date_created: string;
  notes: string;
  title: string;
  id: string;
}
