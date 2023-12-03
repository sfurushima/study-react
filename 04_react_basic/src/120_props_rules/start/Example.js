import Bye from "./components/Bye"
import Hello from "./components/Hello"

const Example = () => {
// POINT propsの流れは一方通行
/**
 * propsは子から親には渡せない。渡すときは親から子へ
 */
const name = "Tom";
  return (
    <>
      <Hello name={name}/>
      <Bye name={name}/>
    </>
  );
};

export default Example;
