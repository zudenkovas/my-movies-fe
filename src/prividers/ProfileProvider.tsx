import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { TOKEN_KEY } from 'api/shared/constants';

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

  useEffect(() => {
    if (isLoggedIn) {
      return;
    }

    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      signIn(token);
    }
  }, []);

  const signIn = (token: string): void => {
    localStorage.setItem(TOKEN_KEY, token);
    setToken(token);
    setIsLoggedIn(true);
  };

  const signOut = (): void => {
    localStorage.removeItem(TOKEN_KEY);
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
