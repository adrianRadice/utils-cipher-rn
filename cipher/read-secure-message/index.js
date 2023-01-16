import DecryptAndVerifySign from '../decrypt-and-verify-sign';
import DecryptText from '../shared/services/symmetric/decrypt-text';
/**
 * Recupera el contenido de un mensaje cifrado y firmado
 * @param encryptedAndSignedContent Contenido cifrado.
 * @param receiverMessagePrivateKey clave privada del recepto para decifrar la clave que se uso para cifrar el contenido .
 * @param ownerMessagePublicKey clave publica del owner para verificar la firma
 */
const ReadSecureMessage = async ({
  encryptedAndSignedContent,
  receiverMessagePrivateKey,
  ownerMessagePublicKey,
}) => {
  const key = await DecryptAndVerifySign({
    encryptedAndSignedContent: encryptedAndSignedContent.key,
    receiverMessagePrivateKey: receiverMessagePrivateKey,
    ownerMessagePublicKey: ownerMessagePublicKey,
  });
  const message = await DecryptText({
    key,
    encryptedText: encryptedAndSignedContent.content,
  });
  return message;
};

export default ReadSecureMessage;
