import "./normalize.scss";
import style from "./index.scss";

import Head from "../Head";
import Navbar from "../Navbar";

const DefaultLayout = props => {
  return (
    <div className={style.layout}>
      <Head title={props.title} description={props.description} />
      <Navbar />
      <main>{props.children}</main>
    </div>
  );
};

export default DefaultLayout;
