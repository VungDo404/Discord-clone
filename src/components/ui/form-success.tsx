import { FaRegCheckCircle } from "react-icons/fa";

interface FormErrorProps {
	message: string;
}
export default function FormSuccess({ message }: FormErrorProps) {
    if(!message) return null; 
    return (
        <div className="flex items-center gap-x-1 bg-emerald-100 text-emerald-700 rounded h-10 p-3">
            <FaRegCheckCircle />
            <span>{message}</span>
        </div>
    );
}
