const checkAuthState = () => {
  const activeUser = localStorage.getItem("activeUser");
  return activeUser ? true : false;
};
const logOutUser = () => {
  localStorage.removeItem("activeUser");
};
export { checkAuthState, logOutUser };
