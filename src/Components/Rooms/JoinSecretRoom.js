import Button from '../ui/Button';
import Modal from '../ui/Modal';
import TextInput from '../ui/TextInput';
import { useHistory } from 'react-router';
import { useState } from 'react';

export default function JoinSecretRoom({ setvalue }) {
  const [secretCode, setSecretCode] = useState('');
  const history = useHistory();

  const JoinRoomHandler = () => {
    history.push(`/room/${secretCode}`);
  };

  return (
    <Modal title='We Chat Secret Rooms'>
      <TextInput
        value={secretCode}
        setValue={setSecretCode}
        type='primary'
        label='Enter Your Secret Room ID'
      />
      <div className='space-x-2 float-right'>
        <Button onClick={JoinRoomHandler} btnType='primary' className='mt-2'>
          Submit
        </Button>
        <Button btnType='danger' onClick={() => setvalue(false)}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
}
