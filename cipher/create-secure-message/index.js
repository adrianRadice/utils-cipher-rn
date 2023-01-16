import base64 from 'react-native-base64';
import EncryptAndSign from '../encrypt-and-sign';
import CreateSymmetricKey from '../shared/services/symmetric/create-key';
import EncryptText from '../shared/services/symmetric/encrypt-text';
/**
 * Retorna un mensaje cifrado y firmado
 *
 * @param content Contenido del mensaje.
 * @param receiverMessagePublicKey clave publica del destinatario para cifrar mensaje .
 * @param ownerMessagePrivateKey clave privada del owner del mensaje para firmar.
 */
const CreateSecureMessage = async ({
  content,
  receiverMessagePublicKey,
  ownerMessagePrivateKey,
}) => {
  const symmetricKey = await CreateSymmetricKey();

  const encryptMessage = await EncryptText({
    key: symmetricKey,
    text: JSON.stringify(content),
  });

  const pkt = JSON.stringify({key: symmetricKey, content: encryptMessage});

  const encodedMsgAndKey = base64.encode(pkt);

  return EncryptAndSign({
    content: encodedMsgAndKey,
    symmetricKey,
    ownerDataPrivateKey: ownerMessagePrivateKey,
    receiverPublicKey: receiverMessagePublicKey,
  });
};

export default CreateSecureMessage;
