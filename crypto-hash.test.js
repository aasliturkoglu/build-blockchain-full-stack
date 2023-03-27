const cryptoHash = require('./crypto-hash');

//https://passwordsgenerator.net/sha256-hash-generator/
//enter "foo"
//sayfada incele de. consolea gel.
//"2C26B46B68FFC68FF99B453C1D30413413422D706483BFA0F98A5E886266E7AE".toLowerCase()

describe('cryptoHash()', () => {

    it('generates a SHA-256 hashed output', () => {
        expect(cryptoHash('foo'))
          .toEqual('2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae');
      });

      it('produces the same hash with the same input arguments in any order', () => {
        expect(cryptoHash('one', 'two', 'three'))
          .toEqual(cryptoHash('three', 'one', 'two'));
      });
});