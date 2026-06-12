import AddTaskDialog from './AddTagDialog'

export default function  Header () {
    return (
        <div className={`flex items-center justify-between pb-5 mb-5 border-gray-300 border-b`}>
            <h3
                className={`text-(--df-text)`}
            >
                Thiết kế giao diện Đăng nhập
            </h3>
            <button
                className={`bg-(--task-add-btn-bg) text-(--task-add-btn-txt) px-3 py-2 rounded-md text-xs font-bold cursor-pointer`}
            >
                + Thêm Task Mới
            </button>
            <AddTaskDialog
                isOn={false}
                onCancel={()=>{
                    console.log('Cancel');}}
                onConfirmPress={()=>{
                    console.log('Confirm');}}
            />
        </div>
    )
}
