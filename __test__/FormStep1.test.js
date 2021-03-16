import React from 'react';
import { TextInput } from 'react-native';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import FormStep1 from '../Components/Steps/FormStep1';

describe('<FormStep1 />', () => {

  test('Should render the page without crashing', () => {
    const tree = renderer.create(<FormStep1 />).toJSON(); //Testing Static Data
    expect(tree).toBeTruthy();
  })

  it('Should render the Title Text Element', () => {
    const wrapper = shallow(<FormStep1 />);
    expect(wrapper.find('Text')).toHaveLength(1)
  });

  it('Should call setCount', () => {
    const setLocation = jest.fn();
    const wrapper = shallow(<FormStep1 setLocation={setLocation} />)

    wrapper.find(TextInput).simulate('changeText', 'Malaysia');
    expect(setLocation).toHaveBeenCalled();
    expect(setLocation).toHaveBeenCalledWith('Malaysia');
  })

  // it('Should change state of location', () => {
  //   const instanceOf = renderer.create(<FormStep1 />).getInstance();
  //   instanceOf.onChangeText('Malaysia');
  //   expect(instanceOf.location).toEqual('Malaysia');
  // })

});
