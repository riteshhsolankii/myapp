import { CiShoppingCart } from "react-icons/ci";

function Sidebar() {
  const students = [1, 2, 3, 4];
  return (
    <div className="sidebar-main">
      <div className="sidebar-inner">
        <img src="/logo.png" alt="Logo" />
        <p>Dashboard</p>
        <div className="sidebar-url">
          <ul>
            {students.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
