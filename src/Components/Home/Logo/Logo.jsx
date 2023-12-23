import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <h1 className="flex gap-x-1 text-blue-500 text-3xl">
        <img
          className="h-10"
          src="https://i.ibb.co/Jm4nxQD/writing.png"
          alt=""
        />
        <span className="mt-[6px]">ZenTask</span>
      </h1>
    </Link>
  );
};

export default Logo;
