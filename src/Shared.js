import React from "react";

export const SharedContext = React.createContext();

export const SharedProvider = ({ children }) => {
  const [sharedState, setSharedState] = React.useState({
    status: null,
    message: null
  });
  return (
    <SharedContext.Provider value={[sharedState, setSharedState]}>
      {children}
    </SharedContext.Provider>
  );
};
