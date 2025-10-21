"use client";

export function MyButton() {
  function handleClick() {
    alert("Hello Hello Hello!");
  }

  function handleMouseOver() {
    console.log("You hovered over me!");
  }

  return (
    <button onMouseOver={handleMouseOver} onClick={handleClick}>
      &lsquo'm a button&lsquo
    </button>
  );
}