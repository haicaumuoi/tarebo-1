import { Box } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import { Header } from '~/components';

const DefaultLayout = ({ children }) => {
  const ref = useRef();

  useEffect(() => {
    const handler = () => {
      const innerEle = ref.current;
      const scrollPos = window.pageYOffset;
      const innerHeight = innerEle.offsetHeight;

      if (scrollPos > innerHeight * 3) {
        if (!innerEle.classList.contains('scrolled')) {
          innerEle.classList.add('scrolled');
        }
      }
      if (scrollPos < innerHeight * 3) {
        if (innerEle.classList.contains('scrolled')) {
          innerEle.classList.remove('scrolled');
          innerEle.classList.remove('sleep');
        }
      }
      if (scrollPos > innerHeight * 6) {
        if (!innerEle.classList.contains('awake')) {
          innerEle.classList.add('awake');
        }
      }
      if (scrollPos < innerHeight * 6) {
        if (innerEle.classList.contains('awake')) {
          innerEle.classList.remove('awake');
          innerEle.classList.add('sleep');
        }
      }
    };
    document.addEventListener('scroll', handler);

    return () => {
      document.removeEventListener('scroll', handler);
    };
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col wrapper">
      <Box
        ref={ref}
        className="header-wrapper"
        bg="white"
        boxShadow="rgb(0 0 0 / 12%) 0px 4px 16px"
      >
        <Header />
      </Box>

      <div>{children}</div>
    </div>
  );
};

export default DefaultLayout;
