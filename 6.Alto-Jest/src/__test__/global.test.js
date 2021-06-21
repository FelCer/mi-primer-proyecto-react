const text = 'Hola mundo';
const fruits = ['Manzana', 'Melon', 'banana'];

// toMatch validate if string
test('Validar si es un texto', () => {
    expect(text).toMatch(/mundo/);
});
// toContain validate exists
test('Existe una banana?', () => {
    expect(fruits).toContain('banana');
});
// toBeGreaterThan validate if mayor
test('Es numero mayor que', () => {
    expect(10).toBeGreaterThan(9);
});
// toBeTruthy validate if true or false
test('Es boolean - verdadero', () => {
    expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""));
};
// toBe validate callback
test('Es un callback', () => {
    reverseString('Hola', (str) => {
        expect(str).toBe('aloH');
    });
});

const reverseString2 = (str) => {
    return new Promise((resolve, reject) => {
        if (!str)
            return reject(Error('ERROR STR'));
        resolve(str.split("").reverse().join(""));
    });
};
// toBe validate promise
test('Probar una promesa', () => {
    return reverseString2('Hola')
        .then(string => {
            expect(string).toBe('aloH');
        });
});

// toBe validate async/await
test('Probar async/await', async () => {
    const string = await reverseString2('Hola');
    expect(string).toBe('aloH');
});
/*
afterEach(() => {
    console.log('Despues de cada prueba');
});
afterAll(() => {
    console.log('Despues de todas las pruebas');
});
beforeEach(() => {
    console.log('Antes de cada prueba');
});
beforeAll(() => {
    console.log('Antes de todas las pruebas');
});*/