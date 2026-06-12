import './globals.css';

export default function Home() {

  return (
      <>
          <div>Anh Cường: Phụ trách phần app/src/projects</div>
          <div>Bạn Cường: Phụ trách phần  API</div>
          <div>Thái Sơn: Phụ trách phần app/src/tickets</div>
          <hr/>
          <h2>Lưu ý chung:</h2>
          <div>Sử dụng lệnh docker compose up để khởi chạy dự án tại localhost:3000.</div>
          <div>Thống nhất sử dụng Tailwind CSS cho toàn bộ dự án.</div>
          <div>Cam on rat nhieu test</div>

          <a href={`http://localhost:3000/Tickets?tk=1&pj=1`} >go!!</a>
      </>
  );
}
