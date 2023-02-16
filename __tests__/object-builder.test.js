import objectBuilder from '../functions/object-builder/1.0';
describe('Object Builder', () => {
  test('Run Object Builder with no nested keys', async () => {
    const keyValue = [
      { key: 'foo', value: 'bar' },
      { key: 'biz', value: 'qux' },
    ];
    const { as } = await objectBuilder({ keyValue });
    expect(as).not.toBeNull();
    expect(as).toEqual({
      foo: 'bar',
      biz: 'qux',
    });
  });

  test('Run Object Builder with a nested key', async () => {
    const keyValue = [
      { key: 'foo.bar', value: 'biz' },
      { key: 'qux', value: 'quux' },
    ];
    const { as } = await objectBuilder({ keyValue });
    expect(as).not.toBeNull();
    expect(as).toEqual({
      foo: {
        bar: 'biz',
      },
      qux: 'quux',
    });
  });

  test('Run Object Builder without any keyValues', async () => {
    const { as } = await objectBuilder({});
    expect(as).not.toBeNull();
    expect(as).toEqual({});
  });
});
