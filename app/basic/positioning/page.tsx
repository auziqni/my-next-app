import React from "react";

export default function Positioning() {
  return (
    <main className="border border-solid border-red-900">
      <h1>ini kotak utama</h1>

      <div className="flex m-5 border border-solid border-red-900">
        <div className="bg-yellow-500 w-10 h-10"></div>
        <div className="bg-yellow-700 w-10 h-10"></div>
        <div className="bg-yellow-900 w-10 h-10"></div>
      </div>
      <div className="flex justify-between m-5 border border-solid border-red-900">
        <div className="bg-yellow-500 w-10 h-10"></div>
        <div className="bg-yellow-700 w-10 h-10"></div>
        <div className="bg-yellow-900 w-10 h-10"></div>
      </div>
      <div className="flex flex-row m-5 border border-solid border-red-900">
        <div className="basis-1/4 bg-yellow-500 w-10 h-10"></div>
        <div className="basis-1/4 bg-yellow-200 w-10 h-10"></div>
        <div className="basis-1/4 hover:basis-1/2 bg-yellow-700 w-10 h-10"></div>
        <div className="basis-1/4 hover:basis-1/2 bg-yellow-900 w-10 h-10"></div>
      </div>

      <div className="flex justify-evenly m-5 border border-solid border-red-900">
        <div className="relative bg-yellow-500 w-40 h-40">
          <div className="bg-sky-700 w-10 h-10 absolute inset-3"></div>
        </div>
        <div className="my-auto">
          <div className="bg-yellow-700 w-32 aspect-video"></div>
        </div>

        <div className="bg-yellow-900 w-40 h-40"></div>
      </div>
    </main>
  );
}
