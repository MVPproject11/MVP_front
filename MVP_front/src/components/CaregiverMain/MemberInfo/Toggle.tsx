import React, { useState } from 'react';

interface YellowToggleSwitchProps {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
    disabled?: boolean;
  }

const YellowToggleSwitch : React.FC<YellowToggleSwitchProps> = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="flex items-center">
      <span className="mr-2 text-gray-700">Off</span>
      <div
        className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${isToggled ? 'bg-yellow-500' : 'bg-yellow-300'}`}
        onClick={handleToggle}
      >
        <div
          className={`w-4 h-4 rounded-full shadow-md transform ${isToggled ? 'translate-x-6 bg-yellow-700' : 'bg-yellow-500'}`}
        ></div>
      </div>
      <span className="ml-2 text-gray-700">On</span>
    </div>
  );
};

export default YellowToggleSwitch;
