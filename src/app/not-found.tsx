import Image from "next/image";

export default function NotFound() {
  return (
    <div
      className={`flex h-[500px] flex-col items-center justify-center gap-4`}
    >
      <Image
        src={
          "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGI2NW95MThxNHV4bmlpcmZhdTczaGwzbXc3emhlOTl4MnZuZXdqZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3osxYC89Dw8RHY19OE/giphy.webp"
        }
        width={300}
        height={300}
        alt={"Not Found"}
      />
      <p>Nothing here!</p>
    </div>
  );
}
