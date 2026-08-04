import { describe, expect, it } from 'vitest';
import { deepClone, omit } from '../src/object';

describe('omit function tests', () => {
    it('{name: "Ali", age: 20} omit ["age"] should return {name: "Ali"}', () => {
        expect(omit({ name: "Ali", age: 20 }, ["age"])).toEqual({ name: "Ali" });
    })

    it('{name: "Ali", age: 20} omit [] should return {name: "Ali", age: 20}', () => {
        expect(omit({ name: "Ali", age: 20 }, [])).toEqual({ name: "Ali", age: 20 });
    })

    it('null omit ["age"] should return {}', () => {
        expect(omit(null as any, ["age"])).toEqual({});
    })

    it('{name: "Ali", age: 20} omit age should return {name: "Ali", age: 20}', () => {
        expect(omit({ name: "Ali", age: 20 }, "age" as any)).toEqual({ name: "Ali", age: 20 });
    })

    it('{name: "Ali", age: 20} omit ["city"] should return {name: "Ali", age: 20}', () => {
        expect(omit({ name: "Ali", age: 20 }, ["city"] as any)).toEqual({ name: "Ali", age: 20 });
    })

})

describe('deepClone function tests', () => {
    it('{name: "Ali", age: 20} deepClone should return a new object with the same properties', () => {
        const obj = { name: "Ali", age: 20 };
        const cloned = deepClone(obj);
        expect(cloned).toEqual(obj);
        expect(cloned).not.toBe(obj);
    });

     it('[1, [2]] deepClone should return [1, [2]]', () => {
        const array = [1, [2]];
        const cloned = deepClone(array);
        expect(cloned).toEqual(array);
        expect(cloned).not.toBe(array);
    });

    it('null deepClone should return null', () => {
        const cloned = deepClone(null as any);
        expect(cloned).toBeNull();
        expect(cloned).toEqual(null);
    });

});