import Link from "next/link";
import Badge from "@/components/Badge";

interface Props {
    projectName :string
}

export default function TopBar ( {projectName} : Props) {
    return (
        <div className={"flex justify-between items-center flex-wrap gap-4"}>
            <Link
                href="/Tickets?pj=pj_1&tk=tk_1"
                className="text-(--gray-text) hover:text-(--df-text) font-semibold transition duration-500"
            >
                Quay lại Dashboard tổng
            </Link>

            <div>
                Dự án hiện tại :  <Badge>{ projectName }</Badge>
            </div>
        </div>
    )
}