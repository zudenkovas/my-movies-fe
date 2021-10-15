import { useEffect, useState } from 'react';

type UseMediaQueryProps = {
  matchQuery: string;
  matchCallback: () => void;
};

const useMediaQuery = ({ matchQuery, matchCallback }: UseMediaQueryProps): { matches: boolean } => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia(matchQuery);
    const eventHandler = (event: MediaQueryListEvent) => {
      if (event.matches) {
        matchCallback();
        setMatches(true);
      } else {
        setMatches(false);
      }
    };
    mediaQuery.addEventListener('change', eventHandler);

    return () => {
      mediaQuery.removeEventListener('change', eventHandler);
    };
  }, []);

  return {
    matches,
  };
};

export default useMediaQuery;
