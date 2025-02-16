import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Header from 'src/components/CaregiverMain/Header';
import SideBar from 'src/components/CaregiverMain/SideBar';

interface WorkConditionsProps {
  onSubmit?: (data: WorkConditionFormData) => void;
}

interface WorkConditionFormData {
  locations: string[];
  times: string[];
  salary: {
    min: number;
    max: number;
  };
}

const WorkConditions: React.FC<WorkConditionsProps> = ({ onSubmit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState<string[]>(['장원동/서초동']);
  const [selectedTimes, setSelectedTimes] = useState<string[]>(['월/하루종일']);

  return (
    <div className="min-h-screen flex flex-col">
        <Header/>
    <div className="flex flex-1">
        <SideBar/>
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">근무 조건 설정</h2>
        <br className='gray'/>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
            ${isEditing 
              ? 'border border-yellow-400 text-yellow-400' 
              : 'bg-yellow-400 text-white hover:bg-yellow-500'
            }`}
        >
          {isEditing ? '수정사항 저장' : '수정하기'}
        </button>
      </div>

      <section className="mb-8">
        <h3 className="text-base font-medium text-gray-800 mb-3">근무 가능 지역</h3>
        <div className="flex flex-wrap gap-2">
          {selectedLocations.map((location, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700"
            >
              {location}
            </span>
          ))}
          {isEditing && (
            <button
              className="px-4 py-2 rounded-full border border-yellow-400 text-yellow-400 text-sm flex items-center gap-1 hover:bg-yellow-50"
            >
              <Plus className="w-4 h-4" />
              지역추가
            </button>
          )}
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-base font-medium text-gray-800 mb-3">근무 가능 시간</h3>
        <div className="flex flex-wrap gap-2">
          {selectedTimes.map((time, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700"
            >
              {time}
            </span>
          ))}
          {isEditing && (
            <button
              className="px-4 py-2 rounded-full border border-yellow-400 text-yellow-400 text-sm flex items-center gap-1 hover:bg-yellow-50"
            >
              <Plus className="w-4 h-4" />
              시간추가
            </button>
          )}
        </div>
      </section>

      <section>
        <h3 className="text-base font-medium text-gray-800 mb-3">희망시급</h3>
        <div className="flex items-center gap-2">
          <input
            type="number"
            value="12000"
            disabled={!isEditing}
            className="w-24 px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <span className="text-gray-600">원</span>
          <span className="mx-2">-</span>
          <input
            type="number"
            value="15000"
            disabled={!isEditing}
            className="w-24 px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <span className="text-gray-600">원</span>
        </div>
      </section>
    </div>
    </div>
    </div>
  );
};

export default WorkConditions;