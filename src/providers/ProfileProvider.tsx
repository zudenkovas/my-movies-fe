import { createContext, ReactNode, useContext, useState } from 'react';

type ProfileProviderProps = {
  children: ReactNode;
};

type ProfileContextValue = {
  isLoggedIn: boolean;
  signIn: (token: string) => void;
  signOut: () => void;
};

const ProfileContext = createContext<ProfileContextValue>({
  isLoggedIn: false,
  signIn: () => {
    return;
  },
  signOut: () => {
    return;
  },
});

const ProfileProvider = ({ children }: ProfileProviderProps): JSX.Element => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [, setToken] = useState<string | null>(null);

  const signIn = (token: string): void => {
    setToken(token);
    setIsLoggedIn(true);
  };

  const signOut = (): void => {
    setIsLoggedIn(false);
    setToken(null);
  };

  return (
    <ProfileContext.Provider
      value={{
        isLoggedIn,
        signIn,
        signOut,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = (): ProfileContextValue => useContext(ProfileContext);

export default ProfileProvider;
