import Image from "next/image";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthService } from "../services/auth-services";

export async function LoginPage() {
    async function handleAction(formData: FormData) {
        "use server";

        const username = formData.get("username") as string;
        const password = formData.get("password") as string;

        if (!username && !password) {
            return;
        }

        const authService = new AuthService();
        const error = await authService.login({ username, password });

        if (error) {
            return error;
        }

        redirect("/");
    }

    return (
        <main className="bg-[#26313c] h-screen flex items-center justify-center p-10">
            <div className="grid w-full h-full grid-cols-1 bg-white box-anim md:grid-cols-2">
                <div className="bg-[#16202a] text-white flex items-center justify-center flex-col">
                    <div className="my-4">
                        <h1 className="text-3xl font-semibold ">Login</h1>
                        <p className="mt-2 text-xs text-slate-400">
                            System control finances for portfólio
                        </p>
                    </div>
                    <form action={handleAction}>
                        <Label htmlFor="username">Email*</Label>
                        <Input
                            //{...register("username", { required: true })}
                            className="mt-2 mb-4 bg-transparent rounded-full"
                            type="email"
                            id="username"
                            name="username"
                            placeholder="username"
                        />
                        {/*errors.username && <span></span>*/}

                        <Label htmlFor="password">Password*</Label>
                        <Input
                            //{...register("password")}
                            className="mt-2 bg-transparent rounded-full"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="password"
                        />

                        <Button
                            type="submit"
                            className="w-full mt-6 bg-indigo-600 rounded-full hover:bg-indigo-700"
                        >
                            Login
                        </Button>
                    </form>
                    <p className="mt-4 text-xs text-slate-200">
                        @2024 All rights reserved
                    </p>
                </div>
                <div className="relative hidden md:block">
                    <Image
                        className="object-cover "
                        fill={true}
                        src="/Bg.jpg"
                        alt="bg-image"
                    />
                </div>
            </div>
        </main>
    );
}
