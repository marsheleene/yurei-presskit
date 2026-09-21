'use client'

import Header from '@/Layout/Header';
import Footer from '@/Layout/Footer';
import LeftColumn from '@/Layout/LeftColumn';
import TOC from '@/Presskit/TOC/TOC'
import FactSheet from '@/Presskit/FactSheet/FactSheet'
import MainColumn from '@/Layout/MainColumn';
import Spacing from '@/Components/Spacing';


import { useState, useCallback, useEffect } from 'react';

const useMediaQuery = (width:string) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e:any) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width})`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

function MainLayout(props:any) {
    
  let className = "m-4 md:m-12"
  if (props.className) {
    className += " " + props.className;
  }

  const isBreakpoint = useMediaQuery("56rem")
  
  return (
    <div className={className}>
      <header className="mb-12">
        <Header />
      </header>

      { isBreakpoint ? (

        <main className="">
          <TOC />
          <Spacing />
          <MainColumn />
          <Spacing />
          <FactSheet />
        </main>

      ) : (

        <main className="mx-20 flex flex-row justify-center gap-20">
          <LeftColumn className="flex-1 max-w-50" />
          <MainColumn className="flex-1 min-w-100 max-w-200" />
        </main>

      )}

      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default MainLayout;