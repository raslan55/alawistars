import React from 'react';
import { useTranslation } from 'react-i18next';
import { LiaHandshake } from "react-icons/lia";

export default function ClientGrid() {
  const { t } = useTranslation();

  // Define the number of clients you want to display based on your translation keys
  // This array will be used to map over and fetch the correct translated keys
  const clientIndices = Array.from({ length: 20 }, (_, i) => i + 1); // Assuming 20 clients (client_name_1 to client_name_20)

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
        {t('our_clients_title')}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {clientIndices.map((index) => (
          <div
            key={`client_${index}`}
            className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2
                       flex flex-col items-center justify-center text-center border border-gray-100"
          >
            {/* Optional: Add a placeholder for a client logo or icon */}
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              {/* You could use an SVG icon or an actual logo image here */}
           <LiaHandshake className='text-3xl text-Main-color ' />


            </div>
            
            <h3 className="text-lg font-bold text-gray-800 mb-1">
              {t(`client_name_${index}`)}
            </h3>
            {/* Optional: Add client-specific details if available */}
            {t(`client_details_${index}`, { defaultValue: '' }) && (
              <p className="text-sm text-gray-500">
                {t(`client_details_${index}`)}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}