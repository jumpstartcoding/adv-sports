import React from "react";
import { ReactNode, useState } from "react";

interface Props {
  children?: ReactNode;
}
function ListGroup({ children }: Props) {
  let name = ["tom", "line", "bear"];
  let myList = [name, ["dsd", "dsfsdsd", "csdcs", "cd"]];
  const getMesage = (msg: string) => {
    return name.length === 0 && <p>{msg}</p>;
  };

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [elt, setElt] = useState(0);

  return (
    <>
      <h1>{getMesage("Item Not Found")}</h1>
      <div>{children}</div>
      <ul className="list-group" style={{ position: "relative", zIndex: 1 }}>
        {myList[elt].map((name, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={name}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {name}
          </li>
        ))}
        <>
          <nav aria-label="Page navigation example ">
            <ul className="pagination">
              <li className="page-item">
                <a
                  className="page-link"
                  href="#s"
                  aria-label="Previous"
                  onClick={() => {
                    setElt(elt === 0 ? 0 : elt - 1);
                    setSelectedIndex(elt === 0 ? selectedIndex : -1);
                  }}
                >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  href="#s"
                  aria-label="Next"
                  onClick={() => {
                    setElt(elt === myList.length - 1 ? elt : elt + 1);
                    setSelectedIndex(
                      elt === myList.length - 1 ? selectedIndex : -1
                    );
                  }}
                >
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </>
      </ul>
    </>
  );
}

export default ListGroup;
