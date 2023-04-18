import Link from "next/link";
import react from "react";

export default function Footer () {
    return (
        <>
            <div className="text-white justify-between px-6 mx-auto mb-6 py-32 grid grid-cols-2 gap-12 md:grid-cols-3 max-w-7xl lg:grid-cols-6 xs:grid-cols-2">
                <div className="text-2xl font-semibold">
                    <div className="mb-3">Company</div>
                
                <div className="flex flex-col text-sm font-normal gap-2">
                    <Link href={"/"}>About Us</Link>
                    <Link href={"/"}>Projects</Link>
                    <Link href={"/"}>Portfolio</Link>
                    <Link href={"/"}>Case Studies</Link>
                    <Link href={"/"}>Tutorials</Link>
                    <Link href={"/"}>Blog</Link>
                    <Link href={"/"}>Contact Us</Link>
                    
                </div>
                </div>
                <div className="text-2xl font-semibold">
                <div className="mb-3">Products</div>
                
                <div className="flex flex-col text-sm font-normal gap-2">
                    <Link href={"/"}>Clothing</Link>
                    <Link href={"/"}>Foot Wear</Link>
                    <Link href={"/"}>Electronics</Link>
                    <Link href={"/"}>Downloads</Link>
                  
                </div>
                </div>
                <div className="text-2xl font-semibold">
                    <div className="mb-3">Services</div>
                
                <div className="flex flex-col text-sm font-normal gap-2">
                    <Link href={"/"}>UI/UX Design</Link>
                    <Link href={"https://www.ahzudirecttech.com/services/web-administration"}>Web Administration</Link>
                    <Link href={"/"}>Digital Marketing</Link>
                    <Link href={"https://www.ahzudirecttech.com/services/app-development"}>App Development</Link>
                    <Link href={"https://www.ahzudirecttech.com/services/deployments"}>Deployments</Link>
                   
                </div>
                </div>
                <div className="text-2xl font-semibold">
                <div className="mb-3">Technology</div>
                
                <div className="flex flex-col text-sm font-normal gap-2">
                    <Link href={"/"}>Next JS</Link>
                    <Link href={"/"}>React</Link>
                    <Link href={"/"}>Tailwind</Link>
                    <Link href={"/"}>Vercel</Link>
                    <Link href={"/"}>Node JS</Link>
                </div>
                </div>
                <div className="text-2xl font-semibold">
                    <div className="mb-3">Community</div>
                
                <div className="flex flex-col text-sm font-normal gap-2">
                    <Link href={"/"}>GitHub</Link>
                    <Link href={"/"}>Open Collective</Link>
                    <Link href={"/"}>FaceBook Group</Link>
                    <Link href={"/"}>Discord</Link>
                    <Link href={"/"}>WhatsApp</Link>
                </div>
                </div>
                <div className="text-2xl font-semibold">
                    <div className="mb-3"> Follow Us</div>
               
                <div className="flex flex-col text-sm font-normal gap-2">
                    <Link href={"https://twitter.com/ahzudirecttech"}>Twitter</Link>
                    <Link href={"https://facebook.com/ahzudirecttech"}>FaceBook</Link>
                    <Link href={"https://instagram.com/ahzu_direct_tech_llc"}>Instagram</Link>
                    <Link href={"https://youtube.com/@ahzu-direct-tech"}>YouTube</Link>
                </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 md:flex-row-reverse md:gap-8 md:justify-between text-xs mx-auto max-w-7xl px-6 py-12 text-white">
                <div className="">
                Designed  by <a className="hover:underline" href="https://github.com/ahzu">Ahzu</a>
                </div>
                <div className="mb-3">
                &copy; 2023 Ahzu Direct Tech, LLC  
                </div>
                
            </div>
        </>
    )
}