import React from 'react';
import { TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import FormStep1 from '../Components/Steps/FormStep1';

describe('<FormStep1 />', () => {
  const setCount = jest.fn();
  const setLocation = jest.fn();
  const wrapper = shallow(<FormStep1
    setCount={setCount}
    setLocation={setLocation}
    />)

  test('Should render the page without crashing', () => {
    const tree = renderer.create(<FormStep1 />).toJSON(); //Testing Static Data
    expect(tree).toBeTruthy();
  })

  it('Should render the Title Text Element', () => {
    expect(wrapper.find('Text')).toHaveLength(1)
  });

  it('Should call setLocation', () => {
    wrapper.find(TextInput).simulate('changeText', 'Malaysia');

    expect(setLocation).toHaveBeenCalled();
    expect(setLocation).toHaveBeenCalledWith('Malaysia');
  })

  it('Should press button and call setCount', () => {
    wrapper.find(TextInput).simulate('changeText', 'Malaysia');
    wrapper.find(Button).simulate('press');

    expect(setCount).toHaveBeenCalled();
  })

});
