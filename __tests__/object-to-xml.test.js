import objectToXml from '../functions/object-to-xml/1.0';
describe('Object to XML', () => {
  const object = {
    foo: 'bar',
    biz: 'qux',
  };

  test('Run Object to XML with expected outcome', async () => {
    const { as } = await objectToXml({ object });
    expect(as).not.toBeNull();
    expect(as).toEqual(
      '<?xml version="1.0" encoding="utf-8"?><foo>bar</foo><biz>qux</biz>'
    );
  });

  test('Run example function to failure', async () => {
    await expect(objectToXml({ input: undefined })).rejects.toThrow(
      'XML Builder: Input object is not an Object!'
    );
  });
});
