import React, { useEffect, useRef, useState } from "react";
import { FaCopy, FaEdit } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const ref = useRef();
    const passwordref = useRef();
    const [form, setForm] = useState({ site: "", username: "", password: "" });
    const [passwordArray, setPasswordArray] = useState([]);

    useEffect(() => {
        const getPasswords = async () => {
            let req = await fetch("http://localhost:3000/")
            let passwords = await req.json()
            console.log(passwords)
            setPasswordArray(passwords);
        }

        getPasswords();
    }, []);

    const copyText = (text) => {
        toast('©️ Copied To ClipBoard ', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        navigator.clipboard.writeText(text);
    };

    const showPassword = () => {
        passwordref.current.type = "text"
        if (ref.current && ref.current.src.includes("icons/eyecross.png")) {
            passwordref.current.type = "password"
            ref.current.src = "icons/eye.png";
        } else {
            ref.current.src = "icons/eyecross.png";
            passwordref.current.type = "text"
        }
    };

    const savePassword = async () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {

            await fetch ("http://localhost:3000",{method: "DELETE" , headers: {"Content-Type":"application/json"},
            body:JSON.stringify({id:form.id})})

            setPasswordArray([...passwordArray,{...form , id:uuidv4()}]);
            await fetch ("http://localhost:3000",{method: "POST" , headers: {"Content-Type":"application/json"},
        body:JSON.stringify({...form, id:uuidv4()})})
            
            setForm({ site: "", username: "", password: "" });
            toast('Password saved! ', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            toast('Error: Password not saved! ', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };

    const deletePassword = async (id) => {
        console.log("Deleting password with id", id)
        let c = confirm("Do you really want to delete this password ?");
        if (c) {
            setPasswordArray(passwordArray.filter(item => item.id !== id));
            // localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)));
            let res = await fetch ("http://localhost:3000",{method: "DELETE" , headers: {"Content-Type":"application/json"},
            body:JSON.stringify({ id})})
            toast('Password Deleted!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };

    const editPassword = (id) => {
        console.log("editing password with id", id)
        setForm({...passwordArray.filter(i => i.id===id)[0],id: id})
       setPasswordArray(passwordArray.filter(item => item.id !==id))
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            <ToastContainer />
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
                <div className="absolute left-0 right-0 top-0 -z-0 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>
            <div className=" p-6 md:container mx-auto">
                <h1 className="text-4xl font-bold text-center text-white">
                    <span className="text-green-700">&lt; </span>
                    Pass
                    <span className="text-green-700">OP /&gt;</span>
                </h1>
                <p className="text-green-600 text-lg text-center">Your own Password Manager</p>
                <div className="text-black flex flex-col p-4 gap-6 items-center">
                    <input value={form.site} onChange={handleChange} className="rounded-full border border-green-500 w-full py-1 p-4" name="site" placeholder="Enter website URL" type="text" id="site" />
                    <div className="flex flex-col md:flex-row w-full justify-between gap-6">
                        <input value={form.username} onChange={handleChange} className="rounded-full border border-green-500 w-full py-1 p-4" name="username" placeholder="Enter Username" type="text" id="username" />
                        <div className="relative">
                            <input ref={passwordref} value={form.password} onChange={handleChange} className="rounded-full border border-green-500 w-full py-1 p-4" name="password" placeholder="Enter Password" id="password" type="password" />
                            <span className="absolute right-[3px] top-[4px] cursor-pointer" onClick={showPassword}>
                                <img className="p-1" width={26} src="icons/eye.png" ref={ref} alt="eye" />
                            </span>
                        </div>
                    </div>

                    <button onClick={savePassword} className="flex justify-center items-center bg-green-600 gap-2 hover:bg-green-300 rounded-full w-fit px-8 py-2 border-4 border-slate ">
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        Save Password
                    </button>
                </div>
                <div className="password overflow-x-auto">
                    <h2 className="font-bold text-3xl py-4 text-white">Your Password</h2>
                    {passwordArray.length === 0 && <div className="text-white"> No Passwords to show</div>}
                    {passwordArray.length !== 0 && <table className="table-auto w-full rounded-sm overflow-hidden mb-10 ">
                        <thead className="bg-green-800 text-white">
                            <tr>
                                <th className="py-2 border border-white">Site</th>
                                <th className="py-2 border border-white">Username</th>
                                <th className="py-2 border border-white">Password</th>
                                <th className="py-2 border border-white">Edit</th>
                                <th className="py-2 border border-white">Delete</th>
                            </tr>
                        </thead>
                        <tbody className="bg-green-100">
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>
                                    <td className="text-center text-black  py-2 border border-black">
                                        <div className="flex item-center justify-center">
                                            <a href={item.site} target="_blank">{item.site}</a>
                                            <div className="size-7 cursor-pointer " onClick={() => { copyText(item.site) }}>
                                                <FaCopy />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="  text-center text-black  py-2 border border-black">
                                        <div className="flex item-center justify-center">
                                            <span>{item.username}</span>
                                            <div className="size-7 cursor-pointer " onClick={() => { copyText(item.username) }}>
                                                <FaCopy />
                                            </div>
                                        </div>
                                    </td>
                                    <td className=" text-center text-black  py-2 border border-black">
                                        <div className="flex item-center justify-center">
                                            <span>{"*".repeat(item.password.length)}</span>
                                            <div className="size-7 cursor-pointer " onClick={() => { copyText(item.password) }}>
                                                <FaCopy />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="  items-center justify-center  text-center text-black  py-2 border border-black">
                                        <span className="flex items-center justify-center cursor-pointer" onClick={() => { editPassword(item.id) }}>
                                            <FaEdit style={{ "hight": "35px", "width": "35px" }} />
                                        </span>
                                    </td>
                                    <td className=" justify-center  text-center text-black  py-2 border border-black">
                                        <span className="cursor-pointer mx-1" onClick={() => { deletePassword(item.id) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/skkahier.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>}
                </div>
            </div>
        </>
    );
}

export default Manager;
