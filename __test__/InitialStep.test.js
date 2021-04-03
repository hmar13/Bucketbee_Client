import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import InitialStep from '../Components/Steps/InitialStep';

describe('<InitialStep />', () => {
  const setCount = jest.fn();
  const wrapper = shallow(<InitialStep
    setCount={setCount}
  />);

  test('Renders correctly', () => {
    const tree = renderer.create(<InitialStep />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should render the second Button Text', () => {
    expect(wrapper.find(Button).at(1).props().children).toEqual('SURE!')
  });

  test('Should call setCount on Touchable press', () => {
    wrapper.find(TouchableOpacity).at(1).simulate('press');
    expect(setCount).toHaveBeenCalled();
  })

});
