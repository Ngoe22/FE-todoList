import Badge from "@/components/Badge";


// interface Props {
//     currentTicketId:string;
//     pjId:string;
// }

// {currentTicketId , pjId } : Props

export default function TaskList () {

    // console.log(`bg-(--${status[0]}) p-3 rounded-xl`)
    return (
        <div>
            <div
                className="flex items-center justify-between pb-4 mb-4 border-b border-b-gray-300 "
            >
                <Badge>project</Badge>
                <button>+ Thêm Task Mới</button>
            </div>
            <ul>
                <li
                    className={`bg-(--gray-bg) p-3 rounded-xl`}
                >
                    <div
                        className={`bg-(--undone) p-1 mb-4 rounded-xl text-(--stt-header) text-md font-bold flex items-center justify-center`}
                    >
                        header
                    </div>
                    <ul>
                        <li>
                            <div>id_bla-bla</div>
                            <div>
                                <div>title</div>
                                <div>content</div>
                                <div>2026-07-02</div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

    ) ;
}

const status = [ "undone" , "inprogress" , "testing" , "done" ] ;


