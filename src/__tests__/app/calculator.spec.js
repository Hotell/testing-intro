import {add, divide, multiply, subtract} from '../../app/calculator';

describe(`Calculator`, () => {

  describe(`add`, () => {

    it('adds 1 + 2 to equal 3', () => {
      const expected = 3;
      const actual = add(1, 2);

      expect(actual).toBe(expected);
    });

  });

});