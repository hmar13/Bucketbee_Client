import Place from './Place';

export default interface Category {
  __typename: string;
  places: Place[];
}