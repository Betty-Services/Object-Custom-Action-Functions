const deleteKeyValueInObject = async ({ object, key }) => {
  if (typeof object !== 'object' || object === null) {
    throw new Error('Delete Key In Object: Object input was not an object!');
  }

  if (Object.hasOwn(object, key)) object[key] = undefined;

  return {
    as: object,
  };
};

export default deleteKeyValueInObject;
