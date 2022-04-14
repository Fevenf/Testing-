const testing = require ('../testing');

describe("reverseString",()=>{
    test("should reverses a number",() =>{
        //actual test
        expect(testing.reverseString('349210')).toBe('012943');
    })
})

//2
describe("alphabet_order",()=>{
    test("count the length ",() =>{
        //actual test
        expect(testing.alphabet_order('webmaster')).toHaveLength(9);
    })
})
//3
describe('test_prime',()=>{
    test("check truthy",()=>{
        //actual test
        expect(testing.test_prime(11)).toBeTruthy();
    })
})
//4
describe("codeA()", () => {
    test("toHavebeencalled", () => {
      //actual test
      testing.codeB = jest.fn();
      testing.codeA();
      expect(testing.codeB).toHaveBeenCalled();
    });
  });
//5
describe("codeA()", () => {
    test("toHaveReturned", () => {
      //actual test
      testing.codeB = jest.fn();
      testing.codeA();
      expect(testing.codeB).toHaveReturned();
    });
  });