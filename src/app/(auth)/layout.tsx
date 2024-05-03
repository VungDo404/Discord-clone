import { ReactNode } from "react";

interface AuthLayoutProps{
    children: ReactNode
}
export default function AuthLayout({children}: AuthLayoutProps){
    return (
        <main className="flex flex-col justify-center items-center h-full bg-gradient-to-r from-[rgb(32,38,57)] via-[rgb(63,76,119)] to-[rgb(63,76,119)] ">
            {children}
        </main>
    );
}