import { Button } from "@/components/ui/button";
import { LiaDiscord } from "react-icons/lia";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import LoginButton from "@/components/auth/login-button";

const font = Poppins({
	subsets: ["latin"],
	weight: ["600"],
});
export default function Home() {
	return (
		<main className="flex flex-col justify-center items-center h-full bg-gradient-to-r from-[rgb(32,38,57)] via-[rgb(63,76,119)] to-[rgb(63,76,119)] ">
			<div className="text-center space-y-4">
				<h1
					className={cn(
						"font-semibold flex text-5xl text-white drop-shadow-2xl space-x-1",
						font.className
					)}
				>
					<LiaDiscord />
					<span>DISCORD</span>
				</h1>
				<p className="text-white text-lg">
					A simple authentication service
				</p>
				<div>
					<LoginButton>
						<Button variant={"secondary"} size={"lg"}>
							Sign in
						</Button>
					</LoginButton>
				</div>
			</div>
		</main>
	);
}
