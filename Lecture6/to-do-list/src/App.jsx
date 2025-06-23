import { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [listItems, setListItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  function addItemToList() {
    if (!item.trim()) return;
    setListItems([...listItems, item]);
    setItem("");
  }

  function removeItemFromList(indexToRemove) {
    const newList = [...listItems];
    newList.splice(indexToRemove, 1);
    setListItems(newList);
  }

  function saveEdit() {
    const newList = [...listItems];
    newList[editIndex] = editText;
    setListItems(newList);
    setEditIndex(null);
  }

  return (
    <div className="flex p-10 bg-blue-300 min-h-screen text-white">
      <div className="flex-1/2 ">
        <h1 className="text-3xl font-bold mb-6">To Do List</h1>
        <div className="flex flex-col gap-3 max-w-80">
          <input
            type="text"
            className="border-2"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button
            type="button"
            className="w-fit text-white bg-yellow-400 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={addItemToList}
          >
            Add to List
          </button>
        </div>
      </div>
      <div className="flex-1/2 p-8 bg-amber-200 text-black">
        <h1 className="text-2xl font-semibold">List</h1>
        <ul className="list-decimal list-inside py-4">
          {listItems.map((item, index) => (
            <li
              key={index}
              className="border-b-2 py-2 flex items-center justify-between"
            >
              {editIndex === index ? (
                <input
                  autoFocus
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onBlur={saveEdit}
                  className="border-2 p-1 w-full"
                />
              ) : (
                <>
                  {item}{" "}
                  <div>
                    <button
                      type="button"
                      className="w-fit text-white bg-red-500 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                      onClick={() => removeItemFromList(index)}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="w-fit text-white bg-blue-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                      onClick={() => {
                        setEditIndex(index);
                        setEditText(item);
                      }}
                    >
                      Edit
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
