"use client";
import Image from "next/image";

const person = {
  name: 'Ragatha',
  theme: {
    backgroundColor: 'pink',
    color: 'black'
  }
};

export default function ProfileList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}&apos;s TADC</h1>
      <Image
        width={115}
        height={100}
        className="avatar"
        src="https://pbs.twimg.com/media/Gt8bWmdW4AA8avZ.jpg"
        alt="Ragatha's"
      />
      <ul>
        <li>Um ragdoll vivo com cabelo vermelho</li>
        <li>&quot;the sweetest little optimist.&quot;</li>
        <li>Princess</li>
      </ul>
    </div>
  );
}

export function Profile() {
  return (
    <Image
      width={150}
      height={150}
      src="https://i.pinimg.com/736x/6b/7c/d5/6b7cd5dfdd768d556563a7ba6bfe4789.jpg"
      alt="Ragatha - TADC"
    />
  );
}
