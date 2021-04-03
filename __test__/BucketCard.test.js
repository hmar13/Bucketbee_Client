import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import BucketCard from '../Components/BucketCard';
import { bucket } from './mocks';
import { shallow } from 'enzyme';
import moment from 'moment'

describe('<BucketCard>', () => {
  const onPress = jest.fn()
  const wrapper = shallow(<BucketCard onPress={onPress} bucket={bucket} />);

  test('Renders correctly', () => {
    const tree = renderer.create(<BucketCard onPress={onPress} bucket={bucket} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render the correct information', () => {
    expect(wrapper.find('Text').at(0).props().children).toEqual(bucket.title)
    expect(wrapper.find('Text').at(1).props().children).toEqual(moment(bucket.date_created).format('MMM Do, YYYY'))
  })
  it('should call onPress', () => {
    wrapper.simulate('press');
    expect(onPress).toHaveBeenCalled();
  })

});
