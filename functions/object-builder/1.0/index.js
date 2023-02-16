import _ from 'lodash';
const objectBuilder = async ({ keyValue = [] }) => {
  let variableMap = keyValue.reduce((previousValue, currentValue) => {
    previousValue[currentValue.key] = currentValue.value;
    return previousValue;
  }, {});

  for (const key in variableMap) {
    if (key.includes('.')) {
      _.set(variableMap, key.split('.'), variableMap[key]);
      delete variableMap[key];
    }
  }

  return {
    as: { ...variableMap },
  };
};

export default objectBuilder;
