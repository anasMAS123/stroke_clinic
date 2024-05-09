import { Link } from "react-router-dom";

function Button({ children, to, invert }) {
  if (invert)
    return (
      <Link to={to}>
        <button className=" px-2 py-3 bg-[#153448] text-white  rounded-md text-center">
          {children}
        </button>
      </Link>
    );
  return (
    <Link to={to}>
      <button className=" px-2 py-3 bg-[#3C5B6F] text-white  rounded-md text-center">
        {children}
      </button>
    </Link>
  );
}

export default Button;
