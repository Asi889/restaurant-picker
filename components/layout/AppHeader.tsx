import Link from "next/link";


const AppHeader = () => {

  return (
    <header className="w-full  bg-purple alfa">
      <div className="max-w-4xl mx-auto py-1 px-4 flex justify-between items-center">
        <Link href={'/'}>
          <a className="hover:rotate-2 transition text-xl md:text-3xl">
            🎰
          </a>
        </Link>

        <h1 className="flex flex-col justify-end">
          <div className="text-2xl text-white  leading-none mb-1">{`What's 4 Dinner`}</div>
          <div className="text-sm text-green leading-none">{`(Or lunch)`}</div>
        </h1>

      </div>
    </header >
  );
};

export default AppHeader;
