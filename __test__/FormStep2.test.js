import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from 'react-native-paper';
import RadioGroup from 'react-native-radio-buttons-group';
import { shallow } from 'enzyme';
import FormStep2 from '../Components/Steps/FormStep2';
import { radioButtons } from './mocks';


describe('<FormStep2 />', () => {
  const setCount = jest.fn();
  const setVibe = jest.fn();
  const wrapper = shallow(<FormStep2
    setCount={setCount}
    setVibe={setVibe}
  />);

  test('Renders correctly', () => {
    const tree = renderer.create(<FormStep2 />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should render the Text Element', () => {
    expect(wrapper.find('Text').at(0).props().children).toEqual('Beach / mountain / city?')
  });

  test('Should call setStates (Count, Vibe)', () => {
    wrapper.find(RadioGroup).simulate('press', radioButtons);
    wrapper.find(Button).simulate('press');

    expect(setCount).toHaveBeenCalled();
    expect(setVibe).toHaveBeenCalled();
  });

});
