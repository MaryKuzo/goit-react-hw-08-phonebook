const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user?.name || '';

const getPendingUserData = state => state.auth.pendingUserData;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getPendingUserData
}

export default authSelectors;
