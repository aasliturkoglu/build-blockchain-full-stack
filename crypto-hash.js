const crypto = require('crypto');

const cryptoHash = (...inputs) => {

  const hash = crypto.createHash('sha256');

  hash.update(inputs.sort().join(' '));

  return hash.digest('hex');
};

module.exports = cryptoHash;


// const crypto = require('crypto'); - crypto modülünü çağırır. Bu, Node.js'in dahili bir modülüdür ve kriptografi işlemlerini gerçekleştirmek için kullanılır.
// const cryptoHash = (...inputs) => { - cryptoHash isimli bir fonksiyon oluşturulur. Bu fonksiyon, sınırsız sayıda girdi alabilir (...inputs), bu girdiler birleştirilip ardından bir hash değeri oluşturulur.
// const hash = crypto.createHash('sha256'); - crypto modülü kullanılarak sha256 hash fonksiyonu oluşturulur ve hash adlı bir değişkene atanır.
// hash.update(inputs.sort().join(' ')); - inputs dizisi sort() fonksiyonu ile sıralanır ve join() fonksiyonu kullanılarak aralarına bir boşluk eklenerek birleştirilir. Bu birleştirilmiş veri hash.update() fonksiyonu kullanılarak hash fonksiyonuna beslenir.
// return hash.digest('hex'); - hash fonksiyonuna beslenen veriden elde edilen hash değeri, digest() fonksiyonu kullanılarak hex formatında döndürülür.
// module.exports = cryptoHash; - cryptoHash fonksiyonu, modül dışında kullanılmak üzere module.exports kullanılarak dışa aktarılır. Bu sayede başka bir dosyadan require() fonksiyonu ile çağırılabilir hale gelir.