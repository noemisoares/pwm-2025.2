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
      I&apos;m a button
    </button>
  );
}
