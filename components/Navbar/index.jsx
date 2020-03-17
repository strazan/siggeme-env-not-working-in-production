import style from "./index.scss";

import Link from "next/link";

const Navbar = props => {
  return (
    <div className={style.navbar}>
      <ul>
        <li>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
        {/* <li>
          <Link href="/blog">
            <a>blog</a>
          </Link>
        </li> */}
        <li>
          <Link href="/about">
            <a href="/about">about</a>
          </Link>
        </li>
        <li>
          {/* <div>
            <Link href="/projects">
              <a>stuff i made</a>
            </Link>

            <Link href="/projects">
              <a>stuff i made</a>
            </Link>

            <Link href="/projects">
              <a>stuff i made</a>
            </Link>
          </div> */}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
