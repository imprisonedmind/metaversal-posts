import { GetUsers } from "@/lib/fetchHelpers";
import { UserCardLink } from "@/components/users/userCardLink";

export default async function Page() {
  const users = await GetUsers();

  return (
    <div className={`divide-y divide-neutral-100`}>
      {users.map((user, index) => {
        return <UserCardLink key={user.name + user.id} user={user} />;
      })}
    </div>
  );
}
