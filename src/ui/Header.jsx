import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" h-16 bg-[#153448] border-solid border-b-1 font-semibold text-lg p-4 text-stone-300 flex items-center ">
      <Link to="/stroke_clinic/">
        <span className=" text-lg">🏥</span>
        <span> stroke clinic</span>
      </Link>
      <ul className=" flex ">
        <li className=" p-6 ml-2 text-sm text-stone-300">
          <Link to="/stroke_clinic/test">test</Link>
        </li>
        <li className=" p-6 ml-2 text-sm">
          <Link to="/stroke_clinic/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
