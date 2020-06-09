const initialState = [
  {
    label: 'confirmed',
    value: '100',
  },
  {
    label: 'recovered',
    value: '150',
  },
  {
    label: 'deaths',
    value: '300',
  },
];

const totalStatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export { totalStatsReducer };
