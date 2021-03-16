import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from 'react-native-paper';
import RadioGroup from 'react-native-radio-buttons-group';
import { shallow } from 'enzyme';
import FormStep2 from '../Components/Steps/FormStep2';
import theme from '../styles/theme.style';


describe('<FormStep2 />', () => {
  const setCount = jest.fn();
  const setVibe = jest.fn();
  const wrapper = shallow(<FormStep2
    setCount={setCount}
    setVibe={setVibe}
  />);

  test('Should render the Text Element', () => {
    expect(wrapper.find('Text').at(0).props().children).toEqual('Beach / mountain / city?')
  });

  test('Testing', () => {
    wrapper.find(RadioGroup).simulate('press', radioButtons);
    wrapper.find(Button).simulate('press');

    expect(setCount).toHaveBeenCalled();
  });

});


const radioButtons = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Beach',
    value: 'option1',
    labelStyle: {
      color: theme.PRIMARY_COLOR_XLITE,
      fontSize: 20,
      fontFamily: 'Lato_300Light',
    },
    color: theme.PRIMARY_COLOR_XLITE,
    size: 20,
    containerStyle: {
      alignSelf: 'flex-start',
    },
  },
  {
    id: '2',
    label: 'Mountains',
    value: 'option2',
    color: theme.PRIMARY_COLOR_XLITE,
    labelStyle: {
      color: theme.PRIMARY_COLOR_XLITE,
      fontSize: 20,
      fontFamily: 'Lato_300Light',
    },
    size: 20,
  },
  {
    id: '3',
    label: 'City',
    value: 'option3',
    color: theme.PRIMARY_COLOR_XLITE,
    size: 20,
    labelStyle: {
      color: theme.PRIMARY_COLOR_XLITE,
      fontSize: 20,
      fontFamily: 'Lato_300Light',
    },
    selected: true,
  },
];