import { inter } from "./fonts";
import Link from "next/link";

export default function SignUpForm({signUpType}: {signUpType: 'Team' | 'Individual'}) {
    return (
        <>
            <div className={`bg-auto bg-slate-100 w-[100%] h-[100%] p-[3%] rounded-md shadow-md ${inter.className} text-black text-center
                Mobile-S:text-[30px]
                Tablet:text-[40px]`}>

                Create a {signUpType} Account<br></br>

                <div className={`h-[2%]`}></div>

                <input
                    className={`w-[50%] min-w-[200px] h-[10%] rounded-r-md border border-gray-200 py-[0.5%] pl-[1%] text-[16px] outline-2 placeholder:text-gray-500`}
                    id="username"
                    type="username"
                    name="username"
                    placeholder="Username"
                    required
                >
                </input>

                <div className={`h-[2%]`}></div>

                <input
                    className={`w-[50%] min-w-[200px] h-[10%] rounded-r-md border border-gray-200 py-[0.5%] pl-[1%] text-[16px] outline-2 placeholder:text-gray-500`}
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                >
                </input>
                <br></br>

                <div className={`h-[2%]`}></div>

                <input
                    className={`w-[50%] min-w-[200px] h-[10%] rounded-r-md border border-gray-200 py-[0.5%] pl-[1%] text-[16px] outline-2 placeholder:text-gray-500`}
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                >
                </input>
                <br></br>

                <div className={`h-[10%]`}></div>

                <p className={`text-[20px]`}>
                    Already have an account? <Link key={`${signUpType} Log In`} href={`${signUpType.toLowerCase()}-login`} className={`text-blue-400`}>
                        Log in!
                    </Link>
                </p>

                <div className='h-[4%]'></div>

                <p className={`text-[20px]`}>
                    <input type='checkbox' className={`h-[100%] w-[2%] min-w-[13px]`}></input>
                    I want to receive emails about TMC and related updates.
                </p>

                <div className='h-[6%]'></div>

                <button className={`w-[20%] min-w-[200px] h-[60px] bg-auto bg-cyan-600 justify-center items-center
                    Laptop:text-[30px]
                    Tablet:text-[30px]
                    Mobile-S:text-[20px]`}
                >
                    Sign Up
                </button>
            </div>
        </>
    );
}