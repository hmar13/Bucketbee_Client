import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../Screens/Login';

describe('<Login />', () => {
  jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon')

  test('Renders correctly', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });


});
