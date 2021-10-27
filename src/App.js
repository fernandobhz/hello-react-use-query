import { useLocation, BrowserRouter, Link, useParams } from "react-router-dom";

const MyComponent = () => {
  const location = useLocation();
  return <div>Path is: {location.pathname}</div>;
};

function Content(props) {
  const location = useLocation();
  const { search } = location;
  const urlParams = new URLSearchParams(search);
  const orderId = urlParams.get("id");

  const params = useParams();

  return (
    <div className="App">
      <a href="/order?id=123">Order 123</a>&nbsp;-&nbsp;
      <Link to={{ pathname: "/order", search: "?id=456" }}>Order 456</Link>&nbsp;-&nbsp;
      <Link to={{ pathname: "/order", search: "?id=789" }}>Order 789</Link>
      <hr />
      Location: {JSON.stringify(location)}<br />
      Search: {search}<br />
      Url Params: {JSON.stringify(urlParams)}<br />
      Order number: {orderId}<br />
      Props: {JSON.stringify(props)}<br/>
      Params: {JSON.stringify(params)}<br />

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MyComponent />
      <Content />
    </BrowserRouter>
  );
}

export default App;
