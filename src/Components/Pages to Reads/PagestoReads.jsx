import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const PagestoReads = () => {
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    // Fetch read books from localStorage
    const storedReadBooks = JSON.parse(localStorage.getItem("read")) || [];
    setReadBooks(storedReadBooks);
  }, []);

  
  

  // Prepare Data for Chart
  const chartData = readBooks.map((book) => ({
    name: book.bookName,
    pages: book.totalPages || 0, // Default to 0 if pages are missing
  }));
  console.log(chartData);
  // Custom Cone-Shaped Bar
  const CustomConeBar = (props) => {
    const { x, y, width, height, fill } = props;
    const conePath = `
      M${x + width / 2},${y} 
      Q${x + width / 2 - width / 4},${y + height / 2} ${x},${y + height} 
      Q${x + width / 2 + width / 4},${y + height / 2} ${x + width},${y + height} 
      Z
    `;
    return <path d={conePath} fill={fill} />;
  };

  // Custom Colors for Each Bar
  const colors = ["#4285F4", "#34A853", "#FBBC05", "#EA4335", "#9B51E0"];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h2 className="text-center font-bold text-4xl text-red-700 mb-8">Pages You Read</h2>
      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
            {/* X-Axis and Y-Axis */}
            <XAxis dataKey="name" tick={{ fill: "#555", fontSize: 12 }} />
            <YAxis tick={{ fill: "#555", fontSize: 12 }} />
            <Tooltip />

            {/* Custom Cone-Shaped Bars */}
            <Bar dataKey="pages" shape={<CustomConeBar />}>
              {chartData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-center text-gray-500">No books in the read list yet. Add books to see the chart!</p>
      )}
    </div>
  );
};

export default PagestoReads;
