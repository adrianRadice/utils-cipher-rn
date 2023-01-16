import {secureCellSealWithSymmetricKeyDecrypt64} from 'react-native-themis';

const DecryptText = async ({key, encryptedText}) => {
  try {
    return await secureCellSealWithSymmetricKeyDecrypt64(key, encryptedText);
  } catch (e) {
    throw {
      code: 'ERROR_DECRYPT_TEXT',
      msg: 'Decrypt text failed',
    };
  }
};

export default DecryptText;
