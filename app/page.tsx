// ALL IMPORTS
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    // Home Page
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl:40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white text-semibold">
            Make anything possible with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500"> 
            {" "}
            Web Development
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, quod
            atque tempora cum cumque praesentium inventore nisi ad quos
            perferendis architecto, rem facilis alias quibusdam deleniti debitis
            distinctio velit minima?
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            {/* Buttons */}
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w [200px]"
            >
              Learn More
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w [200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group group-hover:opacity-20" />
              Learn More
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w [200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group group-hover:opacity-20" />
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* FOR MOBILE VERSION */}
      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        {/* Buttons */}
        <Link
          href="/my-skills"
          className="rounded-[20px]  group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w [200px]"
        >
          Learn More
        </Link>
        <Link
          href="/my-projects"
          className="rounded-[20px]  group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w [200px]"
        >
          Learn More
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px]  group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w [200px]"
        >
          Learn More
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="Horse"
          height={300}
          width={300}
          className="absolute right-55 top-40" />

        <Image
          src="/cliff.webp"
          alt="cliff"
          height={480}
          width={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          height={2000}
          width={2000}
          className="w-full h-full" />

        <Image
          src="/stars.png"
          alt="stars"
          height={300}
          width={300}
          className="absolute top-10 left-0 z-[10]" />
      </div>
    </main>
  );
}
