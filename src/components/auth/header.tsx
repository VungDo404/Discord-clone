import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { LiaDiscord } from "react-icons/lia";

interface AuthHeader{
    label: string
}
const font = Poppins({
    subsets: ['latin'],
    weight: '500',
})
export default function AuthHeader({label}: AuthHeader){
    return (
        <div className={cn("space-y-3 text-center", font.className)}>
            <h1 className="text-3xl font-semibold flex justify-center items-center space-x-1">
                <LiaDiscord />
                <span>DISCORD</span>
            </h1>
            <p className="text-sm text-gray-500">
                {label}
            </p>
        </div>
    );
}