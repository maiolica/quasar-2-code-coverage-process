const useTest = () => {
  const showValue = () => {
    if (process.env.NODE_ENV !== 'development') {
      // eslint-disable-next-line no-console
      console.error(true);
    }
  };

  return {
    showValue,
  };
};

export default useTest;
