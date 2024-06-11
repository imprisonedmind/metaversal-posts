import Navbar from "@/components/navbar/navbar";
import UsersWrapper from "@/components/users/usersWrapper";

export default function Home() {
	return (
		<main className={"max-w-[760px] mx-auto p-4"}>
			<Navbar/>
			<UsersWrapper/>
		</main>
	);
}
