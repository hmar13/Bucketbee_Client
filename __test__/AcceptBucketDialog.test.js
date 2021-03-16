import React from 'react';
import Dialog from 'react-native-dialog';
import renderer from 'react-test-renderer';
import AcceptBucketDialog from '../Components/AcceptBucketDialog';

import { shallow } from 'enzyme';
jest.useFakeTimers();

describe('<AcceptBucketDialog>', () => {
  const onPress = jest.fn()
  const handleBucketAdd = jest.fn()
  const wrapper = shallow(<AcceptBucketDialog acceptDialogVisible={true} setAcceptDialogVisible={onPress} handleBucketAdd={handleBucketAdd} />);

  test('Renders correctly', () => {
    const tree = renderer.create(<AcceptBucketDialog acceptDialogVisible={true} setAcceptDialogVisible={onPress} handleBucketAdd={handleBucketAdd} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should render the Title Text Element', () => {
    expect(wrapper.find(Dialog.Button)).toHaveLength(2)
  });
  it('should close dialog when pressed "No" pressed', () => {
    wrapper.find(Dialog.Button).at(0).simulate('press');
    expect(onPress).toHaveBeenCalled();
  })
  it('should add bucket when "Yes" is pressed', () => {
    wrapper.find(Dialog.Button).at(1).simulate('press');
    expect(handleBucketAdd).toHaveBeenCalled();
  })
});
