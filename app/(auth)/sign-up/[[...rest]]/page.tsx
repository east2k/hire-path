import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

const SignUpPage = () => {
    return (
        <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-2 text-blue-ribbon-500">
                    <Image src="/images/logo.png" width={40} height={40} alt="HirePath Logo" />
                    <h1 className="text-2xl font-bold">HirePath</h1>
                </div>
                <p className="text-ink-500 text-sm">Track your path to your next role.</p>
            </div>

            <SignUp signInUrl="/sign-in" />
        </div>
    );
};

export default SignUpPage;
