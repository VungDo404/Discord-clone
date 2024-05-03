import { BsExclamationTriangleFill } from "react-icons/bs";

interface FormErrorProps {
	message: string;
}
export default function FormError({ message }: FormErrorProps) {
    if(!message) return null; 
    return (
        <div className="flex items-center gap-x-1 bg-red-200 text-destructive rounded h-10 p-3">
            <BsExclamationTriangleFill />
            <span>{message}</span>
        </div>
    );
}
