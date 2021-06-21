const randomString = require('../index');
const ramdomStrings = require('../index');

/*test('Probar la funcionalidad', () => {
    expect(typeof (ramdomStrings())).toBe('string');
});*/

describe('Probar funcionalidades de randomStrings', () => {
    test('Probar la funcionalidad', () => {
        expect(typeof (ramdomStrings())).toBe('string');
    });
    test('Comprobar que no existe una ciudad', () => {
        expect(randomString()).not.toMatch(/Cordoba/);
    });
});