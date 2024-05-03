import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";

export default function Social() {
	return (
		<div className="w-full flex gap-x-2">
			<Button variant={"outline"} size={'lg'} className="w-full">
				<FcGoogle className="text-lg"/>
			</Button>
            <Button variant={"outline"} size={'lg'} className="w-full">
            <FaGithub className="text-lg"/>
			</Button>
		</div>
	);
}
