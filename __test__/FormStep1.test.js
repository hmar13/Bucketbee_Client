import React from 'react';
import renderer from 'react-test-renderer';
import BucketCard from '../Components/BucketCard';

describe('<Login />', () => {
  const onPress = jest.fn()
  const bucket = {
    __typename: 'Bucket',
    categories: [{
      __typename: 'Category',
      id: '604ca4e87f7d89153b39d99f',
      label: "Hello",
      places: [],
    }],
    date_created: '2021-03-13T11:41:28.273Z',
    id: "604ca4e87f7d89153b39d9a0",
    notes: "Hello",
    title: "Hello",
  }

  test('Renders correctly', () => {
    const tree = renderer.create(<BucketCard onPress={onPress} bucket={bucket} />).toJSON();
    console.log(tree)
    // expect(tree).toMatchSnapshot();
    expect(tree.children.length).toBe(1);
  });
});
