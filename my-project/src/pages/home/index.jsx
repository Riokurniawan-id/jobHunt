import Logo from "./component/logo";
import Menu from "./component/menu";
import Button from "./component/button";
import Title from "./component/title";
import Pattern from "./component/pattern";

const Home = () => {
  return (
    <>
      <div className="container bg-slate-50 h-screen py-1 px-32 flex flex-col overflow-hidden relative bg-hero-pattern bg-right">
        {/* navbar */}
        <div className="flex ">
          <Logo />
          <Menu />
          <Button />
        </div>
        {/* navbar */}
        {/* hiro */}
        <div className="hiro grow flex justify-start">
          <Title />
          <Pattern />
        </div>
      </div>
    </>
  );
};
export default Home;
