import React from "react";

export default function Positioning() {
  return (
    <main>
      <div className="border border-solid border-red-900 mb-1">
        <h1>spacing</h1>
        <div className="flex m-5 border border-solid border-red-900">
          <div className="bg-yellow-500   w-5 h-5"></div>
          <div className="bg-yellow-700   w-5 h-5"></div>
          <div className="bg-yellow-900  w-5 h-5"></div>
        </div>
        <div className="flex m-5 border border-solid border-red-900">
          <div className="bg-yellow-500   p-5">ini isi</div>
          <div className="bg-yellow-700   p-5">ini isi</div>
          <div className="bg-yellow-900  p-5">ini isi</div>
        </div>
      </div>

      <div className="border border-solid border-red-900 mb-1">
        <h1>flex</h1>
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
      </div>

      <div className="border border-solid border-red-900 mb-1">
        <h1>grid</h1>

        <div className="grid grid-cols-4 gap-4 p-4">
          <div className="h-10 bg-red-200"> </div>
          <div className="h-10 bg-red-400"> </div>
          <div className="h-10 bg-red-600"> </div>
          <div className="h-10 bg-red-800"> </div>
          <div className="h-10 bg-red-300"> </div>
          <div className="h-10 bg-red-500"> </div>
          <div className="h-10 bg-red-700"> </div>
        </div>

        <div className="grid grid-cols-4 gap-4 p-4">
          <div className="w-10 h-10 bg-red-200"> </div>
          <div className="w-10 h-10 bg-red-400"> </div>
          <div className="w-10 h-10 bg-red-600"> </div>
          <div className="w-10 h-10 bg-red-800"> </div>
          <div className="w-10 h-10 bg-red-300"> </div>
          <div className="w-10 h-10 bg-red-500"> </div>
          <div className="w-10 h-10 bg-red-700"> </div>
        </div>
      </div>

      <div className="border border-solid border-red-900 mb-1 p-5">
        <h1>typography</h1>

        <h2 className="text-xl">ini tulisan</h2>
        <h2 className="text-lg">ini tulisan</h2>
        <h2 className="font-bold">ini tulisan</h2>
      </div>

      <div className="border border-solid border-red-900 mb-1 p-5">
        <h1>breakpoint hover</h1>
        <div className="h-28 w-28 md:bg-sky-400 lg:bg-lime-400 mb-2"></div>
        <div className="h-28 w-28 md:bg-sky-400 lg:bg-lime-400 hover:bg-red-400 mb-2"></div>
        <div className="h-28 w-28 md:bg-sky-400 lg:bg-lime-400 shadow-2xl border border-dotted border-yellow-700"></div>
      </div>

      <div className="border border-solid h-56 border-red-900 mb-1 p-5 relative">
        <h1>z</h1>
        <div className="h-10 w-10 bg-red-200 z-30 absolute inset-3 "></div>
        <div className="h-28 w-28 bg-sky-500 z-20 absolute inset-8"></div>
        <div className="h-48 w-48  bg-red-800 absolute inset-3 "></div>
        <div className="h-28 w-28 bg-red-500 z-10 absolute inset-3"></div>
      </div>
    </main>
  );
}
