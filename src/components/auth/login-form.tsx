"use client";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import CardWrapper from "./card-wrapper";
import { z } from "zod";
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import FormError from "../ui/form-error";
import FormSuccess from "../ui/form-success";

export default function LoginForm() {
	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	function onSubmit(values: z.infer<typeof LoginSchema>) {
        form.reset()
		console.log(values);
	}
	return (
		<CardWrapper
			headerLabel="Welcome back"
			backButtonHref="/register"
			backButtonLabel="Don't have an account?"
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8"
				>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
                                        type="email"
										placeholder="user@example.com"
										{...field}
									/>
								</FormControl>
								<FormDescription>
									This is your email address.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input type="password" placeholder="******" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
                    <FormError message=""/>
                    <FormSuccess message="Email sent!"/>
					<Button type="submit" className="w-full">
						Submit
					</Button>
				</form>
			</Form>
		</CardWrapper>
	);
}
