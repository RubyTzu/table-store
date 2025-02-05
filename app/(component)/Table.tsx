"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { storeData } from "@/app/(data)/dummyData";
import clsx from "clsx";

export function Table() {
  const [currentPlace, setCurrentPlace] = useState(storeData.north);
  const [currentBtn, setCurrentBtn] = useState("north");
  function handleShowRegion(place: string) {
   let newData = storeData[place];
    setCurrentPlace(newData);
    setCurrentBtn(place);
  }

  useEffect(() => {}, [currentPlace]);

  return (
    <>
      <div className="">
        <div className="pt-10 pb-10 flex justify-center text-[36px] font-semibold md:pt-0">
          <h2 className="">全台店家</h2>
        </div>
        <section className="w-[80vw]">
          <div className="">
            <div className="w-full border-y-2">
              <div className="flex justify-between md:w-2/3">
                <button
                  className={clsx("grow py-2 border-b-2", {
                    "border-b-black": currentBtn === "north",
                    "border-b-transparent": currentBtn !== "north",
                  })}
                  onClick={() => handleShowRegion("north")}>
                  北
                </button>
                <button
                  className={clsx("grow py-2 border-b-2", {
                    "border-b-black": currentBtn === "central",
                    "border-b-transparent": currentBtn !== "central",
                  })}
                  onClick={() => handleShowRegion("central")}>
                  中
                </button>
                <button
                  className={clsx("grow py-2 border-b-2", {
                    "border-b-black": currentBtn === "south",
                    "border-b-transparent": currentBtn !== "south",
                  })}
                  onClick={() => handleShowRegion("south")}>
                  南
                </button>
                <button
                  className={clsx("grow py-2 border-b-2", {
                    "border-b-black": currentBtn === "all",
                    "border-b-transparent": currentBtn !== "all",
                  })}
                  onClick={() => handleShowRegion("all")}>
                  全台
                </button>
              </div>
            </div>
            <DesktopTable currentPlace={currentPlace} />
            <MobileTable currentPlace={currentPlace} />
          </div>
        </section>
      </div>
    </>
  );
}

function DesktopTable({ currentPlace }: { currentPlace:any }) {
  return (
    <table className="mt-10 w-full hidden md:table">
      <thead>
        <tr className="border-b-2">
          <th className="pb-2 w-1/6">
            <span className="">地區</span>
          </th>
          <th className="pb-2 w-1/4">
            <span className="">店名</span>
          </th>
          <th className="pb-2 w-1/2">
            <span className="">地址</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {currentPlace.map((store: any, idx: any) => {
          return (
            <tr className="" key={idx}>
              <td className="text-center py-4 border-b" data-title="地區">
                {store.area}
              </td>
              <td className="text-center py-4 border-b" data-title="店名">
                {store.name}
              </td>
              <td className="text-center py-4 border-b text-blue-500" data-title="地址">
                <Link href={`https://maps.app.goo.gl/${store.googlemap}`} target="_blank">
                  {store.address}
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}


function MobileTable({ currentPlace }: { currentPlace: any }) {
   return (
     <table className="w-full">
       <tbody className="md:hidden">
         {currentPlace.map((store: any, idx: any) => {
           return (
             <div className="w-[95%] mx-auto border-b-2" key={idx}>
               <tr className="flex justify-between pt-4 pb-1 border-b">
                 <th className="font-semibold">地區</th>
                 <td className="" data-title="地區">
                   {store.area}
                 </td>
               </tr>
               <tr className="flex justify-between py-1 border-b">
                 <th className="font-semibold">店名</th>
                 <td className="" data-title="店名">
                   {store.name}
                 </td>
               </tr>
               <tr className="flex justify-between pt-1 pb-4">
                 <th className="font-semibold">地址</th>
                 <td className=" text-blue-500" data-title="地址">
                   <Link href={`https://maps.app.goo.gl/${store.googlemap}`} target="_blank">
                     {store.address}
                   </Link>
                 </td>
               </tr>
             </div>
           );
         })}
       </tbody>
     </table>
   );
}