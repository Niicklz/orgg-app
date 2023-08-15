const CHARACTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[{]};:,<.>?";

/**
 *
 * @param length Length of the random id
 * @returns {string} Random id `pN&#G<,$FW`
 */
export const generateRandomId = (length = 10): string => {
  let randomId = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
    randomId += CHARACTERS.charAt(randomIndex);
  }

  return randomId;
};

let i = 0;

function* createIdGenerator() {
  while (true) yield i++;
}

function getId() {
  return createIdGenerator().next().value;
}

const myObjWithCustomIterator = {
  name: "Jose Daniel",
  age: 24,
  [Symbol.iterator]: function* () {
    for (const key in this) {
      yield this[key as keyof typeof this];
    }
  },
};

const one = 1;
const object = {
  name: "Jose Daniel",
  valueOf() {
    return 1;
  },
};

const stringVacio = "";
const arrayVacio = [];
console.log(stringVacio == arrayVacio);
