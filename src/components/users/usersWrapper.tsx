import {User} from "@/lib/types";
import {UserCard} from "@/components/users/userCard";

async function GetUsers() {
	const url = process.env.NEXT_PUBLIC_USERS_API!
	const res = await fetch(url, {});
	if (res.ok) {
		return await res.json() as User[];
	} else {
		throw Error(res.statusText)
	}
}

export default async function UsersWrapper() {
	const users = await GetUsers()

	return (
		<div className={``}>
			{users.map((user, index) => {
				return <UserCard key={user.name + user.id} user={user}/>
			})}
		</div>
	);
};