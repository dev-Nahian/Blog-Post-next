// import wait from "@/lib/wait";

import Link from "next/link";

export default function NotificationsPage() {
    // await wait(2000);

    // throw new Error("An error occured");

    return (
        <div className="text-xl p-4 row-span-2 border border-gray-200 rounded h-[745px] flex items-center justify-center gap-2">
            <span className="text-white">NOTIFICATIONS</span>

            <Link href="/parallel-dashboard/seen" className="text-blue-300">See</Link>
        </div>
    );
}