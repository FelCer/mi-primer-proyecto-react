const cities = ['Ciudad de mexico', 'Bogota', 'Buenos aires', 'Guadalajara'];

const randomString = () => {
    const string = cities[Math.floor(Math.random() * cities.length)];
    return string;
};

const reverseString2 = (str) => {
    return new Promise((resolve, reject) => {
        if (!str)
            return reject(Error('ERROR STR'));
        resolve(str.split("").reverse().join(""));
    });
};

module.exports = randomString;