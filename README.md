## Utilidades de cifrado para rn

Metodos para cifrado de info con RN

#### Dependencias

```ps
npm install --save react-native-themis
```

#### Ejemplo

```js
(async () => {
  const ownerMessageKeyPair = await CreateKeyPairRCA();
  const receiverMessageKeyPair = await CreateKeyPairRCA();

  const encrypted = await CreateSecureMessage({
    content: { data: "hola mundo" },
    ownerMessagePrivateKey: ownerMessageKeyPair.private,
    receiverMessagePublicKey: receiverMessageKeyPair.public,
  });
  const decrypted = await ReadSecureMessage({
    encryptedAndSignedContent: encrypted,
    ownerMessagePublicKey: ownerMessageKeyPair.public,
    receiverMessagePrivateKey: receiverMessageKeyPair.private,
  });

  console.log(decrypted);
})();
```
