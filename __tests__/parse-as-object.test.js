import parseAsObject from '../functions/parse-as-object/1.0';
describe('Parse As Object', () => {
  test('Run Insert Parse As Object with valid inputs', async () => {
    const json = '{"foo":"bar","baz":"qux"}';
    const { as } = await parseAsObject({ json });
    expect(as).not.toBeNull();
    expect(as).toEqual({
      foo: 'bar',
      baz: 'qux',
    });
  });

  test('Run Insert Parse As Object with a number as input', async () => {
    const { as } = await parseAsObject({ json: 1 });
    expect(as).not.toBeNull();
    expect(as).toEqual(1);
  });

  test('Run Insert Parse As Object with null as input', async () => {
    const { as } = await parseAsObject({ json: null });
    expect(as).toBeNull();
    expect(as).toEqual(null);
  });

  test('Run Parse As Object to failure with json being undefined', async () => {
    await expect(parseAsObject({ json: undefined })).rejects.toThrow(
      "Parse As Object: The input JSON coudn't be converted to an Object"
    );
  });

  test('Run Parse As Object to failure with json as a bad string', async () => {
    await expect(parseAsObject({ json: '{foo: bar}' })).rejects.toThrow(
      "Parse As Object: The input JSON coudn't be converted to an Object"
    );
  });
});
