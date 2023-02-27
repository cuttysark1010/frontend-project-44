const makeRandomNum100 = () => {
  const randomNum = Math.floor(Math.random() * 100);
  return randomNum;
};

const makeRandomNum10 = () => {
  const randomNum = Math.floor(Math.random() * 10);
  return randomNum;
};

export { makeRandomNum10, makeRandomNum100 };
