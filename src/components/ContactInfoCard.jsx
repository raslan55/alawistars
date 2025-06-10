import React from 'react';

const ContactInfoCard = ({ icon, title, detail }) => {
  return (
    <div className="flex items-center py-2">
      {/* Icon Container */}
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-600">
        {React.cloneElement(icon, { className: "w-6 h-6 text-Main-color " })}
      </div>
      {/* Text Content */}
      <div className="ms-4">
        <p className="text-gray-600 text-sm font-bold  capitalize">{title}</p>
        <div className="text-gray-800 font-semibold">{detail}</div>
      </div>
    </div>
  );
};

export default ContactInfoCard;