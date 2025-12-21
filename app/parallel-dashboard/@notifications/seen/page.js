// import wait from "@/lib/wait";
import Link from "next/link";

export default function SeenNotificationsPage() {
    // await wait(2000);

    // throw new Error("An error occured");

    return (
        <div className="text-xl p-4 row-span-2 border border-gray-200 rounded h-[745px] flex items-center gap-2 justify-center">
            NOTIFICATIONS
            <Link href="/parallel-dashboard" className="text-blue-300">ALL</Link>
        </div>
    );
}