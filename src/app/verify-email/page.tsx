"use client"
import { verifyEmailApi } from "@/Redux/Action/user";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

interface Props { }

const OTPField: React.FC<Props> = (props): JSX.Element => {
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
    const [active, setActive] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter()
    const searchParams = useSearchParams()
    const view = searchParams.get('view');
    const inputRef = useRef<HTMLInputElement>(null)
    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newOtp: string[] = [...otp]
        newOtp[index] = target.value.substring(target.value.length - 1)
        if (!target.value) {
            setActive(index - 1);
        } else if (active === otp.length - 1) {
            setActive(otp.length - 1);
        } else {
            setActive(index + 1);
        }
        setOtp(newOtp)
    }
    useEffect(() => {
        inputRef?.current?.focus()
    }, [active])
    const handleSubmit = async () => {
        let payload = { otp: otp.join('') };
        try {
            setLoading(true);
            let data = await verifyEmailApi(payload);
            if (data.status >= 200 && data.status < 300) {
                toast.success(data.message);
                return router.push(view ? atob(view) : '/profile/general')
            } else {
                toast.error(data.message);
            }
        } catch (e: any) {
            toast.error(e.message)
        } finally {
            setLoading(false);
        }

    }
    return (
        <div className="h-screen w-full flex items-center justify-center">
            <div className="h-full sm:w-[80%] w-full flex justify-center sm:items-start items-center space-x-2 flex-col">
                <h1 className=" text-4xl mb-4"> Verify your Email</h1>
                <p className=" font-mono text-center">A 6 digit OTP has been sent to your registered email </p>
                <p className="mb-5  font-mono">Please verify below </p>
                <div className="flex justify-center items-center space-x-2 mt-5">
                    {otp.map((_, index: number) => {
                        return (
                            <React.Fragment key={index}>
                                <input
                                    ref={active === index ? inputRef : null}
                                    type="number"
                                    value={otp[index]}
                                    onChange={(e) => handleChange(e, index)}
                                    className="sm:w-12 sm:h-12 h-10 w-10 border-2 rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-gray-400 focus:border-gray-700 focus:text-gray-700 text-gray-400 transition"
                                />
                                {index === otp.length - 1 ? null : (
                                    <span className="w-2 py-0.5 bg-gray-400" />
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
                <button
                    className="border slider mt-10  py-3 px-12 flex items-center justify-center w-[20rem] text-center rounded transition-all tracking-wide hover:tracking-widest relative"
                    onClick={handleSubmit}
                >
                    {
                        loading ? <div className="h-6 w-6 rounded-full border-t-2 border-l-2 animate-spin " /> : 'Verify'
                    }
                </button>
            </div>
        </div>
    );
};

export default OTPField;