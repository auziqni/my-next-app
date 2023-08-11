"use client";
import React, { use } from "react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { auth, useUser } from "@clerk/nextjs";

export default function Inside() {
  // const { user, userId } = auth();
  // const { userId } = auth();
  const { user } = useUser();
  return (
    <main>
      <Link href={"/auth"} className=" bg-red-300">
        back
      </Link>
      <div>
        <h1>
          hai <span>{user?.username}</span>, <span></span>{" "}
        </h1>
        <br />
        <h1>{user?.id}</h1>
      </div>
      <div className=" w-44 m-5 p-5 bg-yellow-100">
        <UserButton afterSignOutUrl="/auth" />
      </div>
    </main>
  );
}
