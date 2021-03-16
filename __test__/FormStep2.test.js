import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from 'react-native-paper';
import RadioGroup from 'react-native-radio-buttons-group';
import { shallow } from 'enzyme';
import FormStep2 from '../Components/Steps/FormStep2';

const mocks = ['Beach', 'Mountain', 'City'];

describe('<FormStep2 />', () => {
  const radioButtons = mocks;
  const setRadioButtons = jest.fn();
  const onPressRadioButton = jest.fn();
  const wrapper = shallow(<FormStep2
    radioButtons={radioButtons}
    setRadioButtons={setRadioButtons}
    onPressRadioButton={onPressRadioButton}
  />);

  test('Should render the page without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  test('Should render the Text Element', () => {
    expect(wrapper.find('Text').at(0).props().children).toEqual('Beach / mountain / city?')
  });

  it('Testing', () => {
    wrapper.find(RadioGroup).simulate('press');

    expect(onPressRadioButton).toHaveBeenCalled();
    // expect(setRadioButtons).toHaveBeenCalled();
  });

});
