import {useState} from "react";

const useReviewState = () => {
  const [text, setText] = useState(``);
  const [rate, setRate] = useState(0);

  return {
    text,
    rate,
    onTextChange: setText,
    onRateChange: setRate
  };
};

export default useReviewState;
