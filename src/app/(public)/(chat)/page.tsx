import { Chat } from "./Chat";

export default function Home() {
  return (
    <div>
      <h1 className=""></h1>
      <Chat
        chat={{
          author: "slava",
          text: "Random text",
        }}
      />
    </div>
  );
}
