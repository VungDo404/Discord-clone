import { ReactNode } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import AuthHeader from "./header";
import BackButton from "./back-button";
import Social from "./social";

interface CardWrapperProps {
	children: ReactNode;
	headerLabel: string;
	backButtonLabel: string;
	backButtonHref: string;
	showSocial?: boolean;
}
export default function CardWrapper({
	children,
	headerLabel,
	backButtonHref,
	backButtonLabel,
	showSocial = true,
}: CardWrapperProps) {
    return (
        <Card className="w-96 shadow-lg">
            <CardHeader>
                <AuthHeader label={headerLabel}/>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter>
                <Social/>
            </CardFooter>
            <CardFooter>
                <BackButton href={backButtonHref} label={backButtonLabel}/>
            </CardFooter>
        </Card>
    );
}
