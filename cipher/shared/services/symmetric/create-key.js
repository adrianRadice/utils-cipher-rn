import {symmetricKey64} from 'react-native-themis';

const CreateSymmetricKey = async () => {
  try {
    return await symmetricKey64();
  } catch {
    throw {
      code: 'ERROR_CREATE_SYMMETRIC_KEY',
      msg: 'Created symmetric key failed',
    };
  }
};

export default CreateSymmetricKey;
