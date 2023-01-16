import {secureMessageEncrypt64} from 'react-native-themis';
const EncryptAndSign = async ({
  content,
  ownerDataPrivateKey,
  receiverPublicKey,
}) => {
  return await secureMessageEncrypt64(
    content,
    ownerDataPrivateKey,
    receiverPublicKey,
  );
};
export default EncryptAndSign;
