import {secureCellSealWithSymmetricKeyEncrypt64} from 'react-native-themis';

const EncryptText = async ({key, text}) => {
  try {
    return await secureCellSealWithSymmetricKeyEncrypt64(key, text);
  } catch {
    throw {
      code: 'ERROR_ENCRYPT_TEXT',
      msg: 'Encrypt text failed',
    };
  }
};

export default EncryptText;
