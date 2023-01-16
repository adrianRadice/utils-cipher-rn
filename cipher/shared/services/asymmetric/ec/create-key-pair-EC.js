import {keyPair64, KEYTYPE_EC} from 'react-native-themis';

const CreateKeyPairEC = async () => {
  try {
    const pair = await keyPair64(KEYTYPE_EC);
    return {
      private: pair.private64,
      public: pair.public64,
    };
  } catch {
    throw {code: 'ERROR_CREATE_PAIR_KEY', msg: 'Created pair key EC failed'};
  }
};

export default CreateKeyPairEC;
