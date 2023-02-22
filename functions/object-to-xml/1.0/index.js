import * as builder from 'xmlbuilder';
const objectToXml = async ({ object, pretty }) => {
  if (typeof object !== 'object' || object === null) {
    throw new Error('XML Builder: Input object is not an Object!');
  }

  return {
    as: builder.create(object, { encoding: 'utf-8' }).end({ pretty }),
  };
};

export default objectToXml;
