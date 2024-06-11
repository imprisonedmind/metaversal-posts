import { UserCardLink } from "@/components/users/userCardLink";
import { GetUsers } from "@/app/actions";

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
