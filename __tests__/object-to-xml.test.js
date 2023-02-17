import parseAsXml from '../functions/parse-as-xml/1.0';
describe('Parse As XML', () => {
  const object = {
    foo: 'bar',
    biz: 'qux',
  };

  test('Run Parse As XML with expected outcome', async () => {
    const { as } = await parseAsXml({ object });
    expect(as).not.toBeNull();
    expect(as).toEqual(
      '<?xml version="1.0" encoding="utf-8"?><foo>bar</foo><biz>qux</biz>'
    );
  });

  test('Run Parse As to failure', async () => {
    await expect(parseAsXml({ input: undefined })).rejects.toThrow(
      'XML Builder: Input object is not an Object!'
    );
  });
});
