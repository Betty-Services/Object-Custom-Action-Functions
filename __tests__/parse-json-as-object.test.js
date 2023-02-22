import parseJsonAsObject from '../functions/parse-json-as-object/1.0';
describe('Parse As Object', () => {
  test('Run Insert Parse As Object with valid inputs', async () => {
    const json = '{"foo":"bar","baz":"qux"}';
    const { as } = await parseJsonAsObject({ json });
    expect(as).not.toBeNull();
    expect(as).toEqual({
      foo: 'bar',
      baz: 'qux',
    });
  });

  test('Run Insert Parse As Object with a number as input', async () => {
    const { as } = await parseJsonAsObject({ json: 1 });
    expect(as).not.toBeNull();
    expect(as).toEqual(1);
  });

  test('Run Insert Parse As Object with null as input', async () => {
    const { as } = await parseJsonAsObject({ json: null });
    expect(as).toBeNull();
    expect(as).toEqual(null);
  });

  test('Run Parse As Object to failure with json being undefined', async () => {
    await expect(parseJsonAsObject({ json: undefined })).rejects.toThrow();
  });

  test('Run Parse As Object to failure with json as a bad string', async () => {
    await expect(parseJsonAsObject({ json: "{foo: 'bar'}" })).rejects.toThrow();
  });
});
