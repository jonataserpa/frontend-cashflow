import { cookies } from "next/headers";
import { Environment } from "@/components/environment";

export class AuthService {
    async login(input: { username: string; password: string }) {
        const response = await fetch(`${Environment.URL_BASE}/auth/login`, {
            method: "POST",
            body: JSON.stringify({
                username: input.username,
                password: input.password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status === 401) {
            return { error: "Credenciais inválidas" };
        }

        if (!response.ok) {
            const error = await response.json();
            return { error };
        }

        const data = await response.json();

        const cookieStore = cookies();
        cookieStore.set("token", data.authorization.token);
    }

    logout() {
        const cookieStore = cookies();
        cookieStore.delete("token");
    }

    getUser() {
        const cookieStore = cookies();
        const token = cookieStore.get("token")?.value;

        if (!token) {
            return null;
        }

        const payloadBase64 = token.split(".")[1];
        const payloadDecoded = atob(payloadBase64);
        return JSON.parse(payloadDecoded);
    }

    getToken() {
        const cookieStore = cookies();
        const token = cookieStore.get("token")?.value;

        if (!token) {
            return null;
        }

        return token;
    }

    isTokenExpired() {
        const user = this.getUser();

        if (!user) {
            return true;
        }

        const now = new Date();
        const exp = new Date(user.exp * 1000);

        return now > exp;
    }
}
