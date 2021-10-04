import { useEffect } from 'react';

type UseMediaQueryProps = {
  dependencies?: any;
  matchQuery: string;
  matchCallback: () => void;
};

const useMediaQuery = ({ matchQuery, matchCallback, dependencies = [] }: UseMediaQueryProps): void => {
  useEffect(() => {
    const mediaQuery = window.matchMedia(matchQuery);
    const closeSidebar = (event: MediaQueryListEvent) => {
      if (event.matches) {
        matchCallback();
      }
    };
    mediaQuery.addEventListener('change', closeSidebar);
    console.log(mediaQuery);
  }, [...dependencies]);
};

export default useMediaQuery;
