import Image from "next/image";
import data from "./data/data.json";

export default function Home() {
  return (
    <main className="">
      <div className="grid grid-cols-2 md:grid-cols-3">
        {data.data.items.map((item: any) => {
          return (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={item.url}
              key={item.url}
              className="w-full h-full relative aspect-[1920/1080] cursor-pointer"
            >
              <Image
                src={"/images/" + item.img}
                alt=""
                fill
                className="object-cover object-top"
              />
            </a>
          );
        })}
      </div>
    </main>
  );
}
