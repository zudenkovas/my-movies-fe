import { useEffect, useState } from 'react';

type UseMediaQueryProps = {
  matchQuery: string;
};

const useMediaQuery = ({ matchQuery }: UseMediaQueryProps): { matches: boolean } => {
  const mediaQuery = window.matchMedia(matchQuery);
  const [matches, setMatches] = useState(mediaQuery.matches);

  useEffect(() => {
    const eventHandler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
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
