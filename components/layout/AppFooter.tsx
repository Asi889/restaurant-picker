import Link from "next/link";


const AppFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full  bg-purple text-white text-sm" dir="ltr">
      <div className="max-w-4xl mx-auto px-1 items-center pt-5 pb-3 flex flex-col justify-center">
        <Link href={'/'}>
          <a>
            <span>🎰&nbsp;</span>
            <b>&nbsp;whats 4 dinner - {year}&nbsp;</b>
            <span>ⓒ</span>
          </a>
        </Link>

       <nav className="font-thin text-center ">
       <span>Developer: <a href="https://asimarom.com/" rel="noopener noreferrer">Asaf Marom</a></span>
       <span>&nbsp;|&nbsp;</span>
       <span>UI/UX&DB: <a href="https://naamanfrenkel.dev/" rel="noopener noreferrer">Nemo Frenkel</a></span>
       </nav>

      </div>
    </footer >
  );
};

export default AppFooter;
