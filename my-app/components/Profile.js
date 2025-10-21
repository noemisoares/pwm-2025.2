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
        src="/images/ragatha_anime.jpg"
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
      src="/images/dollface.jpg"
      alt="Ragatha - TADC"
    />
  );
}
