import './globals.css';

export default function Home() {
    return (
        <div className="max-w-3xl mx-auto p-8">
            <div className="space-y-2">
                <div>Anh Cường: Phụ trách phần app/src/projects</div>
                <div>Bạn Cường: Phụ trách phần API</div>
                <div>Thái Sơn: Phụ trách phần app/src/tickets</div>
            </div>

            <hr className="my-6" />

            <h2 className="text-xl font-bold mb-4">
                Lưu ý chung:
            </h2>

            <div className="space-y-2">
                <div>- Sử dụng lệnh docker compose up để khởi chạy dự án tại localhost:3000 .</div>
                <div>- API chạy ở  localhost : 3001 .</div>
                <div>- Thống nhất sử dụng Tailwind CSS cho toàn bộ dự án.</div>
                <div> Cảm ơn rất nhiều  test</div>
            </div>

            <a
                href="http://localhost:3000/Projects"
                className="inline-block mt-6 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            >
                Vào dự án !!
            </a>
        </div>
    );
}