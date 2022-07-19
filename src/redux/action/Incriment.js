export const INCRIMENT_COUNTER = "INCRIMENT_COUNTER";
export const DECRIMENT_COUNTER = "DECRIMENT_COUNTER";
export const Inciment = () => {
  return {
    type: INCRIMENT_COUNTER,
  };
};

export const Decriment = () => {
  return {
    type: DECRIMENT_COUNTER,
  };
};
