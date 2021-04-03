import React from 'react';
import { TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import FormStep3 from '../Components/Steps/FormStep3';

describe('<FormStep3 />', () => {
  const setEmojis = jest.fn();
  const handleSubmit = jest.fn();
  const wrapper = shallow(<FormStep3
    setEmojis={setEmojis}
    handleSubmit={handleSubmit}
  />);

  test('Renders correctly', () => {
    const tree = renderer.create(<FormStep3 />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should render the Text Element', () => {
    expect(wrapper.find('Text').at(0).props().children).toEqual('Describe yourself in 3 emojis:')
  });

  test('Should call setState on TextInput with value entered', () => {
    wrapper.find(TextInput).simulate('changeText', 'new emoji here');
    expect(setEmojis).toHaveBeenCalledWith('new emoji here');
  })

  test('Should call handle function on Button Press', () => {
    wrapper.find(Button).simulate('press');
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  })
});
