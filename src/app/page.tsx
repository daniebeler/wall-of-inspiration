import { NextPageContext } from "next";
import Image from "next/image";
import data from "./data/data.json"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data.data.items.map((item: any) => {
        return (
          <div
            key={item.url}
            className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2"
          >
            <Image
              src={"/images/" + item.img}
              alt=""
              width={80}
              height={80}
              className={item.img}
            />{" "}
          </div>
        );
      })}
    </main>
  );
}

