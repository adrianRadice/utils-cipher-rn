import {keyPair64, KEYTYPE_RCA} from 'react-native-themis';

const CreateKeyPairRCA = async () => {
  try {
    const pair = await keyPair64(KEYTYPE_RCA);
    return {
      private: pair.private64,
      public: pair.public64,
    };
  } catch {
    throw {code: 'ERROR_CREATE_PAIR_KEY', msg: 'Created pair key RCA failed'};
  }
};

export default CreateKeyPairRCA;
