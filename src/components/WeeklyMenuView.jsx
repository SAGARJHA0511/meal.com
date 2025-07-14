const mockMenu = [
  { day: 'Monday', veg: 'Paneer Butter Masala', nonVeg: 'Chicken Curry', dessert: 'Gulab Jamun' },
  { day: 'Tuesday', veg: 'Chole Bhature', nonVeg: 'Mutton Rogan Josh', dessert: 'Kheer' },
  { day: 'Wednesday', veg: 'Veg Biryani', nonVeg: 'Chicken Biryani', dessert: 'Rasgulla' },
  { day: 'Thursday', veg: 'Dal Tadka', nonVeg: 'Fish Curry', dessert: 'Ice Cream' },
  { day: 'Friday', veg: 'Aloo Gobi', nonVeg: 'Butter Chicken', dessert: 'Halwa' }
];

export default function WeeklyMenuView() {
  return (
    <div className="bg-black p-4 rounded shadow space-y-4">
      <h2 className="text-lg font-bold">Weekly Menu</h2>
      <div className="space-y-2">
        {mockMenu.map((item, index) => (
          <div key={index} className="border p-2 rounded">
            <h3 className="font-semibold">{item.day}</h3>
            <p className="text-green-600">Veg: {item.veg}</p>
            <p className="text-red-600">Non-Veg: {item.nonVeg}</p>
            <p className="text-gray-600">Dessert: {item.dessert}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
