import "./Example.css";

const Example = () => {
  return (
    <div className="component">
      <h3>Hello Component</h3>
      {/* // ul>li{item-$}*5のタブで表現できる */}
      <ul>
        <li>item-1</li>
        <li>item-2</li>
        <li>item-3</li>
        <li>item-4</li>
        <li>item-5</li>
      </ul>
    </div>
  );
};

export default Example;
