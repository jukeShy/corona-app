const initialState = [
  {
    name: 'USA',
    confirmed: {
      value: 1965685,
    },
    recovered: {
      value: 518522,
    },
    deaths: {
      value: 111194,
    },
  },
  {
    name: 'Russia',
    confirmed: {
      value: 1965685,
    },
    recovered: {
      value: 518522,
    },
    deaths: {
      value: 111194,
    },
  },
];

const countriesReduces = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export { countriesReduces };
