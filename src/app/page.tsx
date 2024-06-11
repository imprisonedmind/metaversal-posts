import Navbar from "@/components/navbar/navbar";
import UsersWrapper from "@/components/users/usersWrapper";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <UsersWrapper />
    </Fragment>
  );
}
