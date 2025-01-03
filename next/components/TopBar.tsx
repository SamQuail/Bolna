import Link from "next/link";

const TopBar = () => {
    return (
        <div className="flex flex-row justify-center mt-4">
            <h1 className="text-[#16a34a] text-7xl font-serif"> <Link href="/">Bolna.</Link></h1>
        </div>
    )
}

export default TopBar;