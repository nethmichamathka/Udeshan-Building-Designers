import React from 'react';

const DIRECTORY_CATEGORIES = [
  "Air Conditioning", "Aluminum Fabricators", "Architects", "Bamboo Products",
  "Bathware & Sanitaryware", "Building Contractors", "Building Material Providers",
  "Carpenters", "Civil Engineers", "Construction Consultants", "Curtains",
  "Draughtsman", "Electrical Appliances", "Electricians", "Financing", "Floorers",
  "Furniture Manufacturers", "Hot Water Systems", "Hotel Equipments Providers",
  "Housing Construction", "Industrial Sewage/Waste Water Disposing", "Interior Designers",
  "Investment - Fixed Deposit", "Iron Works & Gates", "Land Developers", "Landscapers",
  "Lift/Elevator", "Lightning & Surge Protection", "Masons", "Moving Services",
  "Notaries", "PABX Telephone System", "Pantry Cupboards", "Pest Control",
  "Plantation", "Rain Gutters", "Roofing Products", "Security Camera Systems",
  "Solar Power System", "Stone Carving", "Surveyor & Leveler", "Swimming Pools",
  "Tempered Glass Doors/Windows", "Vehicle Tracking Solutions", "Valuers",
  "Water Proofing and Painting", "Water Solutions"
];

export const ProfessionalDirectory: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Professional Directory</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {DIRECTORY_CATEGORIES.map((category, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl border border-black/5 hover:border-orange-200 hover:shadow-md transition-all cursor-pointer group"
            >
              <span className="text-gray-700 group-hover:text-orange-600 font-medium">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
