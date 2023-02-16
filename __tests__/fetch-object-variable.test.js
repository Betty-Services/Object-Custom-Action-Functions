import fetchObjectVariable from '../functions/fetch-object-variable/1.0';
describe('Fetch Object Variable', () => {
  const object = {
    foo: 'bar',
  };

  const keyName = 'foo';

  test('Run Fetch Object Variable with existing key', async () => {
    const { as } = await fetchObjectVariable({ object, keyName });
    expect(as).not.toBeNull();
    expect(as).toEqual('bar');
  });

  test('Run Fetch Object Variable with non-existent key', async () => {
    const { as } = await fetchObjectVariable({
      object,
      keyName: 'I do not exist',
    });
    expect(as).toBeNull();
    expect(as).toEqual(null);
  });

  test('Run example function to failure', async () => {
    await expect(
      fetchObjectVariable({ object: null, keyName })
    ).rejects.toThrow('Fetch Object Variable: Object input was not an object!');
  });
});
