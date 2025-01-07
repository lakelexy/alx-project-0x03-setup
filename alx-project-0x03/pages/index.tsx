import Image from "next/image";
import Layout from "@/components/layouts/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
        <Image
          className="dark:invert mb-8"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Splash App
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Your one-stop platform for all your needs.
        </p>
        <div className="flex gap-4">
          <a
            className="rounded-full bg-blue-500 hover:bg-blue-400 text-white text-sm sm:text-base px-6 py-2 transition"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our Docs
          </a>
          <a
            className="rounded-full bg-gray-500 hover:bg-gray-400 text-white text-sm sm:text-base px-6 py-2 transition"
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy Now
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
