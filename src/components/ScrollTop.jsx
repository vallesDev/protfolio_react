import { useState } from 'react';

const ScrollTop = () => {
  const [scrollTop, setScrollTop] = useState(false);
  const scrollBotton = () => {
    if (window.scrollY >= 560) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  };

  window.addEventListener('scroll', scrollBotton);

  const btnScroll = scrollTop ? 'scrolltop show-scroll' : 'scrolltop';

  return (
    <a href="#" className={btnScroll} id="scroll-top">
      <i className="bx bxs-chevron-up  scrolltop__icon"></i>
    </a>
  );
};

export default ScrollTop;
