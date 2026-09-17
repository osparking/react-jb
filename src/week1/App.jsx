import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");

  const addCartItem = (e) => {
    e.preventDefault();
    setItems((prevItems) => [...prevItems, item]);
    setItem("");
    console.log(`항목: ${item}`);
  };

  const chooseItem = (e) => {
    const { value } = e.target;
    setItem(value);
  };

  console.log("리프");
  return (
    <>
      <section id="center">
        <form onSubmit={addCartItem}>
          <table>
            <tr>
              <td>
                <label htmlFor="name">장바구니:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="items"
                  value={items}
                  readOnly
                  style={{ border: "0" }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="age">항목:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="item"
                  value={item}
                  onChange={chooseItem}
                />
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <button type="submit">저장</button>
              </td>
            </tr>
          </table>
        </form>
      </section>
    </>
  );
}

export default App;
