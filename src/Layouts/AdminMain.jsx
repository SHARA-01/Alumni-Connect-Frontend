import { useEffect, useState } from "react";
import { Outlet } from 'react-router-dom';
import { AdminNavbar, Sidebar } from "../Components/index";

export default function DesktopMessage() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 1200); // Adjust the width as needed for your definition of mobile
        };
        checkScreenSize();     // Initial check
        window.addEventListener("resize", checkScreenSize);    // Event listener for screen size change
        return () => window.removeEventListener("resize", checkScreenSize);   // Clean up event listener
    }, []);

    return (
        <div className="custome-root bg-[#EEEEEE]">
            {isMobile ? (
                <main className="py-8 px-4 lg:px-12">
                    <p className="text-lg lg:text-xl">
                        This page is designed for desktop users. For the best experience, please access it from a desktop or laptop device.
                    </p>
                </main>
            ) : (
                <div className="bg-[rgb(240, 242, 245)] p-5 h-[100%] space-x-9 "  >
                    <div className="flex w-full  space-x-8  ">
                        <div className="w-1/6 h-[500px] sticky top-[28px] ">
                            <Sidebar />
                        </div>

                        <div className="w-4/5 h-auto">
                            <div id="adminbar" className="w-full h-auto sticky-bg-white-blur top-4 z-10  rounded-lg ">
                                <AdminNavbar />
                            </div>

                            <Outlet />
                        </div>
                    </div>

                </div>
            )}

        </div>
    );
}

