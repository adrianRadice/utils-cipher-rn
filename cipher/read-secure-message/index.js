import base64 from 'react-native-base64';
import DesencryptAndVerifySign from '../desencrypt-and-verify-sign';
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
  const pkt = await DesencryptAndVerifySign({
    encryptedAndSignedContent: encryptedAndSignedContent,
    receiverMessagePrivateKey: receiverMessagePrivateKey,
    ownerMessagePublicKey: ownerMessagePublicKey,
  });
  const {key, content} = JSON.parse(base64.decode(pkt));
  const message = await DecryptText({key, encryptedText: content});
  return message;
};

export default ReadSecureMessage;
