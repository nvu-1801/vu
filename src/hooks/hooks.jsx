import { useState, useEffect } from "react";
import { data } from '../components/data'; // Import dữ liệu cục bộ từ file data.js

// Custom Hook to fetch menu items data
function useMyHook() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Giả lập thời gian trễ của việc lấy dữ liệu, giống như gọi API
        setTimeout(() => {
          setMenuItems(data); // Sử dụng dữ liệu từ file data.js
        }, 500); // Giả lập độ trễ 0.5s

        // const response = await fetch('https://api.example.com/menu-items'); // Replace with your API endpoint
        // const result = await response.json();
        // setMenuItems(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Only runs once when the component mounts

  return menuItems;
}

export default useMyHook;
