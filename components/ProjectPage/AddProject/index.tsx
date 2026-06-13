"use client"

export default function AddProject ()  {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-col md:flex-row gap-4">
        <input
            type="text"
            placeholder="Tên dự án..."
            onChange={(e) => {}}
            className="border border-gray-300 px-4 py-2 rounded-lg flex-1 focus:outline-none focus:border-blue-500"
        />
        <input
            type="text"
            placeholder="Mã (Key)..."
            onChange={(e) => {}}
            className="border border-gray-300 px-4 py-2 rounded-lg flex-1 uppercase focus:outline-none focus:border-blue-500"
        />
        <button
            onClick={()=>{}}
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
            Thêm Mới
        </button>
    </div>
    )
}