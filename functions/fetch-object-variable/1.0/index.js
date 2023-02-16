const fetchObjectVariable = async ({ object, keyName }) => {
  if (typeof object !== 'object' || object === null) {
    throw new Error('Fetch Object Variable: Object input was not an object!');
  }

  if (Object.hasOwn(object, keyName)) {
    return {
      as: object[keyName],
    };
  } else {
    return {
      as: null,
    };
  }
};

export default fetchObjectVariable;
