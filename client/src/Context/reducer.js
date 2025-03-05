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
      case 'THEME':
      return {
        ...oldState,
        theme: oldState.theme === "light" ? "dark" : "light"
      };             
    default:
      return oldState;
  }
};
