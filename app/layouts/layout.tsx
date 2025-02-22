import {Outlet} from "react-router";

import Header from '../component/header';

const layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
export default layout;