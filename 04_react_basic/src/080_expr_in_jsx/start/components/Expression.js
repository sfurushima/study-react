import "./Expression.css"

const Expression = () => {
  const title = "ExpressionN";
  const array = ['item1', 'item2', 'item3'];
  const hello = (arg) => `${arg} Function`;

  return (
    <div className={title.toLowerCase()}>
      <h3>Hello Expression!</h3>
      <h3>{array}</h3>
      <h3>{hello('hello')}</h3>
      <h3>{/** 画面上には表示されません */}</h3>
      {<h3>Hello JSX</h3>}
    </div>
  )
}

export default Expression;