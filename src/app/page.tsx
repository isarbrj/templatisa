"use client";
import Image from "next/image";
import Post from "./post";
import React from "react";

export default function Home() {
  const [posts, setPosts] = React.useState([]);
  const [newPosts, setNewPosts] = React.useState("");
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Post props={{ image: "teacher.png" }} />
        <Post props={{ image: "professor.jpg", text: "Olá mundo :)" }} />
        {posts.map((p) => {
          return <Post key={p} props={p} />;
        })}
        <div>
          <label htmlFor="user">Usuário: </label>
          <input
            className="pl-2 rounded-xl bg-white text-black bg-cyan-500 shadow-lg shadow-cyan-500/50 field-sizing-fixed w-60"
            type="text"
            onChange={(e) => {
              setNewPosts(e.target.value);
            }}
            id="user"
            name="user"
          />

          <button
            className="cursor-pointer rounded-xl px-2 py-1 bg-green-500 text-white"
            onClick={() => {
              setPosts([{ image: "teacher.png", text: newPosts }]);
            }}
          >
            postar
          </button>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row"></div>
      </main>
    </div>
  );
}
