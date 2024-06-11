import {NavbarITem} from "@/components/navbar/navbarITem";

export default function Navbar() {
  return (
    <div className={`
    	border border-neutral-100 rounded-xl p-4 shadow-sm
		`}>
			<ul className={"flex flex-row gap-4"}>
				<NavbarITem title={"Users"}/>
				<NavbarITem title={"Posts"}/>
			</ul>
    </div>
  );
};