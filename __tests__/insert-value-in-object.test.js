import insertValueInObject from '../functions/insert-value-in-object/1.0';
describe('Insert Value into Object', () => {
  const object = {
    foo: 'bar',
  };
  const key = 'baz';
  const value = 'qux';

  test('Run Insert Value into Object with expected outcome', async () => {
    const { as } = await insertValueInObject({ object, key, value });
    expect(as).not.toBeNull();
    expect(as).toEqual({
      foo: 'bar',
      baz: 'qux',
    });
  });

  test('Run Insert Value into Object to failure with object being null', async () => {
    await expect(
      insertValueInObject({ object: null, key, value })
    ).rejects.toThrow('Insert value in Object: Object input is not an Object');
  });

  test('Run Insert Value into Object to failure with object being undefined', async () => {
    await expect(
      insertValueInObject({ object: undefined, key, value })
    ).rejects.toThrow('Insert value in Object: Object input is not an Object');
  });
});
