const formatResult = (
  score,
  total
) => {

  return {

    score,

    total,

    percentage:
      Math.round(
        (score / total) * 100
      ),
  };
};

export default formatResult;