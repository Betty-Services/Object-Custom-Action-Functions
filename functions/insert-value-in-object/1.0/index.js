const insertValueInObject = async ({ object, key, value }) => {
  if (typeof object !== 'object' || object === null) {
    throw new Error('Insert value in Object: Object input is not an Object');
  }

  object[key] = value;
  return {
    as: object,
  };
};

export default insertValueInObject;
