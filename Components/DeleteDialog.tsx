import React from 'react';
import theme from '../styles/theme.style';
import Dialog from 'react-native-dialog';

import { View } from 'react-native';

interface DeleteDialogProps {
  deleteVisible: boolean;
  setDeleteVisible(val: boolean): void;
  handleDelete(): void;
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({
  deleteVisible,
  setDeleteVisible,
  handleDelete,
}) => {
  return (
    <View>
      <Dialog.Container visible={deleteVisible}>
        <Dialog.Title>Delete this?</Dialog.Title>
        <Dialog.Description>You cannot undo this action.</Dialog.Description>
        <Dialog.Button
          color={theme.PRIMARY_COLOR_LITE}
          bold={true}
          label="Cancel"
          onPress={() => setDeleteVisible(false)}
        />
        <Dialog.Button
          color="red"
          bold={true}
          label="Delete"
          onPress={handleDelete}
        />
      </Dialog.Container>
    </View>
  );
};

export default DeleteDialog;
