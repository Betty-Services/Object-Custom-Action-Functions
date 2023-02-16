import lukeFetchObjectVariable from '../functions/luke-fetch-object-variable/1.0';
describe('Luke Fetch Object Variable', () => {
  const object = {
    foo: {
      bar: [{ biz: 'qux' }],
    },
  };

  const expression = 'foo.bar.0.biz';

  test('Run Luke Fetch Object Variable with expected outcome', async () => {
    const { as } = await lukeFetchObjectVariable({ object, expression });
    expect(as).not.toBeNull();
    expect(as).toEqual('qux');
  });

  test('Run Luke Fetch Object Variable with undefined path', async () => {
    const { as } = await lukeFetchObjectVariable({
      object,
      expression: 'bar.0.biz',
    });
    expect(as).toBeUndefined();
    expect(as).toEqual(undefined);
  });

  test('Run Luke Fetch Object Variable to failure with the input object as a string', async () => {
    await expect(
      lukeFetchObjectVariable({ object: '', expression })
    ).rejects.toThrow();
  });

  test('Run Luke Fetch Object Variable to failure with the input object as undefined', async () => {
    await expect(
      lukeFetchObjectVariable({ object: undefined, expression })
    ).rejects.toThrow();
  });

  test('Run Luke Fetch Object Variable to failure with the input object as null', async () => {
    await expect(
      lukeFetchObjectVariable({ object: undefined, expression })
    ).rejects.toThrow();
  });

  test('Run Luke Fetch Object Variable to failure with the input object as a number', async () => {
    await expect(
      lukeFetchObjectVariable({ object: 1, expression })
    ).rejects.toThrow();
  });
});
