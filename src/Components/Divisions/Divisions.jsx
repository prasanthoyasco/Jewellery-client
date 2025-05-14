import React from "react";
import "./Divisions.css";
import { useModal } from "../ModalContext/ModalContext";

const items = [
  { name: "Catalog", href: "/catalog" },
  { name: "Sale", href: "/sale" },
  { name: "New", href: "/new" },
  { name: "Payment and  Delivery", href: "/payment and delivery" },
  { name: "About us", href: "/about" },
  { name: "Contact us", href: "/contact" },
  { name: "For Wholesalers", href: "/wholesalers" },
];

function Divisions() {
  const { setIsLoginOpen } = useModal();

  return (
    <div className="division-heading">
      {items.map((data, index) => {
        if (data.name === "Login") {
          return (
            <a
              key={index}
              onClick={(e) => {
                e.preventDefault();
                setIsLoginOpen(true);
              }}
              className="fw-semibold cursor-pointer"
            >
              {data.name}
            </a>
          );
        } else {
          return (
            <a
              href={data.href}
              key={index}
              className="fw-semibold"
            >
              {data.name}
            </a>
          );
        }
      })}
    </div>
  );
}

export default Divisions;
