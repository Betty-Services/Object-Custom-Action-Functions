const parseJsonAsObject = async ({ json }) => {
  return {
    as: JSON.parse(json),
  };
};

export default parseJsonAsObject;
