import { inter } from "./fonts";
import Image from "next/image";
import Link from "next/link";

export default function LoginForm({loginType}: {loginType: 'Team' | 'Individual'}) {
    return (
        <>
            <div className={`bg-auto bg-slate-100 w-[100%] h-[100%] p-[3%] rounded-md shadow-md ${inter.className} text-black
                Mobile-S:text-[30px]
                Tablet:text-[40px]`}>
                {loginType} - Sign In <br></br>

                <div className={`h-[15%]`}></div>

                <div className="relative h-[65px] content-right">
                    <input
                        className={`absolute left-[65px] peer block w-[50%] min-w-[200px] h-[100%] rounded-r-md border border-gray-200 py-[0.5%] pl-[1%] text-[16px] outline-2 placeholder:text-gray-500`}
                        id="username"
                        type="username"
                        name="username"
                        placeholder="Username"
                        required
                    >
                    </input>

                    <div className={`absolute size-[65px] bg-auto bg-gray-300 rounded-l-md flex justify-center items-center`}>
                        <Image
                            src="/UserPic.png"
                            width={512}
                            height={512}
                            alt="UserPic"
                            className={`absolute h-[75%] w-auto z-40`}
                        ></Image>
                    </div>
                </div>

                <div className={`h-[10%]`}></div>

                <div className="relative h-[65px] content-right">
                    <input
                        className={`absolute left-[65px] peer block w-[50%] h-[100%] min-w-[200px] rounded-r-md border border-gray-200 py-[0.5%] pl-[1%] text-[16px] outline-2 placeholder:text-gray-500`}
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    >
                    </input>

                    <div className={`absolute size-[65px] bg-auto bg-gray-300 rounded-l-md flex justify-center items-center`}>
                        <Image
                            src="/Lock.png"
                            width={512}
                            height={512}
                            alt="Lock"
                            className={`absolute h-[75%] w-auto z-40`}
                        ></Image>
                    </div>
                </div>

                <div className="h-[30%]"></div>

                <div className={`relative w-[100%] h-[10%] grid
                    Mobile-S:grid-cols-[max(125px,6%)_60%]`}
                >
                    <button className={`bg-auto bg-cyan-700 w-[6%] min-w-[100px] h-[100%] p-[0.8%] flex justify-center items-center ${inter.className} text-white 
                        Mobile-S:text-[15px]
                        Mobile-L:text-[20px]`}
                    >
                        Sign In
                    </button>

                    <p className={`h-[100%] ${inter.className} flex items-center justify-left
                        Mobile-M:text-[13px]
                        Mobile-S:text-[10.5px]
                        Mobile-L:text-[20px]`}
                    >
                        Don't have an account? ​
                        <Link key={`${loginType} Sign Up`} href={`/sign-up-${loginType.toLowerCase()}`} className={`text-blue-400`}>
                            Sign up!
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}