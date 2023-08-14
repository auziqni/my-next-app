"use client";
import React from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
export default function Auth() {
  const { isSignedIn } = useUser();
  return (
    <main>
      <Link href={"/"} className=" bg-red-300">
        back
      </Link>
      <div className=" m-5 p-5 bg-yellow-100">
        <div>
          <Link href={"/sign-up"}>sign up</Link>
        </div>
        <div>
          <Link href={"/sign-in"}>sign in</Link>
        </div>
        <div>
          <Link href={"/auth/inside"}>
            {isSignedIn ? "go inside" : "login dulu baru masuk"}
          </Link>
        </div>
      </div>
    </main>
  );
}
