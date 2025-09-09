import { Contador } from "@/components/Contador";
import Rpg, {RPG} from "@/components/RPG";
import ProfileList, {Profile} from "@/components/Profile";
import { MyButton } from "@/components/MyButton";
import { List } from "@/components/List";
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <ProfileList />
      <hr />
      <section>
        <h3>seitokaicho</h3>
        <Profile />
        <Profile />
        <Profile />
      </section>
      <hr />
      <Contador />
      <Contador />
      <hr />
      <Link href="/personagens">Personagens</Link>
      <hr />
      <p>
        Hello there.
        <br />
        <span className="blueText">How do you do?</span>
      </p>
      <MyButton />
      <hr />
      

    </div>
  );
}