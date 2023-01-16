import EncryptAndSign from '../encrypt-and-sign';
import CreateSymmetricKey from '../shared/services/symmetric/create-key';
import EncryptText from '../shared/services/symmetric/encrypt-text';
/**
 * Retorna un mensaje cifrado siemtricamente y la clave con la que  se cifro firmada y cifrada asim
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

  const [encryptMessage, secureKey] = await Promise.all([
    EncryptText({
      key: symmetricKey,
      text: JSON.stringify(content),
    }),
    EncryptAndSign({
      content: symmetricKey,
      ownerDataPrivateKey: ownerMessagePrivateKey,
      receiverPublicKey: receiverMessagePublicKey,
    }),
  ]);

  return {key: secureKey, content: encryptMessage};
};

export default CreateSecureMessage;
