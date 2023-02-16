const lukeFetchObjectVariable = async ({ object, expression }) => {
  if (typeof object !== 'object' || object === null) {
    throw new Error('Luke Fetch Object Variable: Object is not an object!');
  }

  const pathArray = expression.split('.');
  let current = object;

  for (var key of pathArray) {
    if (Array.isArray(current)) {
      key = parseInt(key);
    }
    if (!current.hasOwnProperty(key)) {
      return {
        as: undefined,
      };
    }
    current = current[key];
  }

  return {
    as: current,
  };
};

export default lukeFetchObjectVariable;
