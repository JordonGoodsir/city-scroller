import Image from "next/image";

const hello = 'hi'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      doggie
      <Image src="/assets/images/wave.svg" alt="buildings" width="1280" height="500"/>
    </main>
  );
}
