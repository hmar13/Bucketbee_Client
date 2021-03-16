import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../Screens/Login';

describe('<Login />', () => {
  jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon')
  // jest.mock('react-native-vector-icons/FontAwesome', () => {
  //   const React = require('react');
  //   const Icon = props => React.createElement('Icon', props, props.children);
  //   Icon.Button = 'Icon.Button';
  //   return Icon;
  // });

  test('Renders correctly', () => {
    const tree = renderer.create(<Login />).toJSON();
    // expect(tree).toMatchSnapshot();
    expect(tree.children.length).toBe(1);
  });
});
