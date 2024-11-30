export const reducer = (
  oldState,
  action
) => {
  switch (action.type) {
    case 'INCRIECE':
      return {
        ...oldState,
        increase: oldState.increase + 1
      };             
    default:
      return oldState;
  }
};
