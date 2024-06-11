import {FC} from "react";

interface UserInitialsProps {
	name: string;
}

export const UserInitials: FC<UserInitialsProps> = ({name}) => {
	return (

		<div className={`
			border-b-[100px] border-l-[25px solid transparent] width-[100px] border-b-red-500
			height-0
		`}>

		</div>
		// <div className={`
		// 	flex items-center justify-center h-8 w-8 bg-red-500 clip-hexagon
		// `}>
		// 	<p className={"text-sm"}>{getInitials(name)}</p>
		// </div>
	);
};