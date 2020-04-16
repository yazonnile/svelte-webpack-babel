import { readable } from 'svelte/store';

const getScroll = () => ({
  top: window.scrollY || document.body.scrollTop || document.documentElement.scrollTop,
  left: window.scrollX || document.body.scrollLeft || document.documentElement.scrollLeft
});

export default readable(getScroll(), set => {
  const scrollHandler = () => {
    set(getScroll());
  };

  const resizeHandler = () => {
    scrollHandler();
  };

  window.addEventListener('resize', resizeHandler);
  window.addEventListener('scroll', scrollHandler);

  resizeHandler();

  return () => {
    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('scroll', scrollHandler);
  };
});
