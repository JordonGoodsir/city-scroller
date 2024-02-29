import Image from "next/image";

const hello = 'hi'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between bg-[#225E92]">
      <div className="relative w-full h-screen">
        <div className="relative h-full w-full max-w-screen-xl">

        </div>
        <img className="w-full absolute bottom-0" src="/assets/images/coverCloud.png" />


        <img className="w-full absolute bottom-0" src="/assets/images/longCloud.png" />
      </div>





    </main>
  );
}
