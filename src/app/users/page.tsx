import { UserCardLink } from "@/components/users/userCardLink";
import { GetUsers } from "@/app/actions";
import { Suspense } from "react";
import SpinnerWrapper from "@/components/loading/spinnerWrapper";

const UsersWrapper = async () => {
  const users = await GetUsers();

  return (
    <div className={`divide-y divide-neutral-100`}>
      {users.map((user, index) => {
        return <UserCardLink key={user.name + user.id} user={user} />;
      })}
    </div>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<SpinnerWrapper />}>
      <UsersWrapper />
    </Suspense>
  );
}
