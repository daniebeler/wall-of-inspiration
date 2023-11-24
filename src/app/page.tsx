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
              className="w-full h-full relative aspect-[4/3] cursor-pointer"
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

        <div
          className="w-full h-full relative aspect-[4/3] bg-[#ecb847] flex justify-center items-center"
        >
          <p className="text-center text-md md:text-xl text-[#1c1d20] font-bold">
            Made by{" "}
            <a
              href="https://daniebeler.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#dc3545]"
            >
              Daniel Hiebeler
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
