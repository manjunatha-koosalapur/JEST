const cloneArray = require ('./cloneArray')

it('clones array'), () => {
    const array = [2,4,6,8]
    expect(cloneArray(array)).toEqual(array)
    // expect(cloneArray(array)).not.toBe(array)
}