const parseAsObject = async ({ json }) => {
  try {
    json = JSON.parse(json);
  } catch (e) {
    throw new Error(
      "Parse As Object: The input JSON coudn't be converted to an Object."
    );
  }
  return {
    as: json,
  };
};

export default parseAsObject;
