export const normalizeObjectByValue = (object, callback) => {
  let payload = [];
  for (let [key, value] of Object.entries(object)) {
    if (value.hasOwnProperty('value')) {
      payload = [
        ...payload,
        {
          label: key,
          value: value.value,
        },
      ];
    }
  }

  callback(payload);
};
