import {secureMessageDecrypt64} from 'react-native-themis';
const DesencryptAndVerifySign = async ({
  encryptedAndSignedContent,
  receiverMessagePrivateKey,
  ownerMessagePublicKey,
}) => {
  return await secureMessageDecrypt64(
    encryptedAndSignedContent,
    receiverMessagePrivateKey,
    ownerMessagePublicKey,
  );
};
export default DesencryptAndVerifySign;
