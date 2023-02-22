![Action Validation](https://github.com/betty-services/Object-Custom-Action-Functions/actions/workflows/main.yml/badge.svg?event=push)

# Object Helper Steps Custom Action Functions

This repository hosts the code for the custom actions steps found in the [Object Helper Steps](https://my.bettyblocks.com/block-store/9fdf9e72-119e-46fe-8c8c-b6325816a1f0/) from the Betty Blocks block store.

### This repository hosts the following steps:

- Delete key value in Object
- Fetch Object Variable
- Luke's Fetch Object Variable
- Object Builder
- Object to XML
- Parse as Object

### Delete key value in Object

This action step allows you to delete a key and it's value in an `Object`.

### Fetch Object Variable

This action step allows you to fetch a value from an `Object` by entering the key. It supports nested variables.

For example, lets say we have the following object:

```
{
    foo: 'bar',
    baz: {
        qux: 'quux'
    }
}
```

We can use the key `foo` to fetch the value `bar`, but we can also use `baz.qux` to retrieve the value `quux`.

If the key wasn't found, the action will return an empty string.

### Luke's Fetch Object Variable

This action step allows you to fetch a value from an `Object` with by entering the key. It supports nested variables **inlcuding arrays**.

For example, lets say we have the following object:

```js
{
    foo: 'bar',
    baz: [
        {
            qux: 'quux'
        }
    ]
}
```

We can use the key `foo` to fetch the value `bar`, but we can also use `baz.0.qux` to retrieve the value `quux`. We can

If the key wasn't found, the action will return an empty string.

### Object Builder

This step lets you create your own object.
You can also create nested values inside this object by defining the key as `my.nested.value`.

### Object to XML

This step created an XML string from your Object.
We have this object for example:

```js
{
    foo: 'bar',
    biz: 'qux',
    quux: {
        corge: 'grault'
    }
}
```

which will result in the following XML string:

```XML
<?xml version="1.0" encoding="utf-8"?>
<foo>bar</foo>
<biz>qux</biz>
<quux>
    <corge>grault</corge>
</quux>
```

Optionally, you can toggle off the `Pretty` option to have it all be in one line.

```XML
<?xml version="1.0" encoding="utf-8"?><foo>bar</foo><biz>qux</biz><quux><corge>grault</corge></quux>
```

### Parse as Object
