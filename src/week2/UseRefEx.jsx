import CounterRef from "./CounterRef";
import IntervalTimer from "./IntervalTimer";
import SearchBox from "./LatestBad";
import SearchBoxGood from "./LatestGood";
import SkipFirstRefHook from "./SkipFirstRefHook";
import TextInput from "./TextInput";
import "./UseRefEx.css";

/**
 * https://chat.deepseek.com/share/7iednkixsj8weqy33z
 * @returns 
 */
const UseRefEx = () => {
  return (
    <div>
      <TextInput />
      <IntervalTimer />
      <CounterRef />
      <SkipFirstRefHook />
      <SearchBox />
      <SearchBoxGood />
    </div>
  );
};

export default UseRefEx;
