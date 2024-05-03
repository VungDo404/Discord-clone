'use client'
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface LoginButtonProps{
    children: ReactNode
    mode?: 'modal' | 'redirect'
    asChild?: boolean
}

export default function LoginButton ({
    children, 
    mode = 'redirect', 
    asChild
}: LoginButtonProps){
    const router = useRouter()
    const onClick = () => {
        router.push('/login')
    }
    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    );
}