import deleteKeyValueInObject from '../functions/delete-key-value-in-object/1.0';
describe('Delete Key Value in Object', () => {
  const object = {
    foo: 'bar',
    baz: 'qix',
  };
  const key = 'baz';

  test('Run Delete Key Value in Object with expected outcome', async () => {
    const { as } = await deleteKeyValueInObject({ object, key });
    expect(as).not.toBeNull();
    expect(as).toEqual({
      foo: 'bar',
    });
  });

  test('Run Delete Key Value in Object to failure with object being null', async () => {
    await expect(deleteKeyValueInObject({ object: null, key })).rejects.toThrow(
      'Delete Key In Object: Object input was not an object!'
    );
  });

  test('Run Delete Key Value in Object to failure with the key being undefined', async () => {
    await expect(
      deleteKeyValueInObject({ object: undefined, key })
    ).rejects.toThrow('Delete Key In Object: Object input was not an object!');
  });

  test('Run Delete Key Value in Object to failure with the key being undefined', async () => {
    await expect(
      deleteKeyValueInObject({ object: undefined, key })
    ).rejects.toThrow('Delete Key In Object: Object input was not an object!');
  });
});
