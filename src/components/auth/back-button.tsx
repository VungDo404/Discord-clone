import Link from "next/link";

interface BackButtonProps {
	label: string;
	href: string;
}
export default function BackButton({ label, href }: BackButtonProps) {
	return (
		<div className="text-sm text-center w-full italic ">
			<Link href={href} className="hover:border-b-2 hover:border-black"> {label}</Link>
		</div>
	);
}
