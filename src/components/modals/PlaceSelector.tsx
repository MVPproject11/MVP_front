import React, { useState } from 'react';

const PlaceSelector: React.FC = () => {
  const [isOpenType, setIsOpenType] = useState<boolean>(false);
  const [isOpenStart, setIsOpenStart] = useState<boolean>(false);
  const [isOpenEnd, setIsOpenEnd] = useState<boolean>(false);
  
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedStart, setSelectedStart] = useState<string>('');
  const [selectedEnd, setSelectedEnd] = useState<string>('');

  // 서울시 구 목록
  const typeOptions: string[] = [
    '강남구', '강동구', '강북구', '강서구', '관악구', 
    '광진구', '구로구', '금천구', '노원구', '도봉구', 
    '동대문구', '동작구', '마포구', '서대문구', '서초구',
    '성동구', '성북구', '송파구', '양천구', '영등포구',
    '용산구', '은평구', '종로구', '중구', '중랑구'
  ];
  
  const startTimeOptions: string[] = Array.from({ length: 24 }, (_, i) => 
    `${String(i).padStart(2, '0')}:00`
  );
  
  const endTimeOptions: string[] = Array.from({ length: 24 }, (_, i) => 
    `${String(i).padStart(2, '0')}:00`
  );

  interface DropdownProps {
    isOpen: boolean;
    options: string[];
    onSelect: (option: string) => void;
    onToggle: () => void;
    selected: string;
  }

  const Dropdown: React.FC<DropdownProps> = ({ isOpen, options, onSelect, onToggle, selected }) => (
    <div className="relative">
      <button
        onClick={onToggle}
        className="w-full px-4 py-2 text-left bg-white border rounded-md focus:outline-none"
      >
        {selected || '선택'}
      </button>
      
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-gray-700 border border-gray-600 rounded-md shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onSelect(option);
                onToggle();
              }}
              className="w-full px-4 py-2 text-left text-white hover:bg-gray-600 border-b border-gray-600 last:border-0"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-medium text-yellow-500 mb-6 text-center">시간 추가</h2>
      
      <div className="flex items-center space-x-4 mb-6">
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-2">지역 선택</p>
          <Dropdown
            isOpen={isOpenType}
            options={typeOptions}
            onSelect={setSelectedType}
            onToggle={() => setIsOpenType(!isOpenType)}
            selected={selectedType}
          />
        </div>
        
        <div className="text-gray-400 self-end pb-2">/</div>
        
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-2">시작시간</p>
          <Dropdown
            isOpen={isOpenStart}
            options={startTimeOptions}
            onSelect={setSelectedStart}
            onToggle={() => setIsOpenStart(!isOpenStart)}
            selected={selectedStart}
          />
        </div>
        
        <div className="text-gray-400 self-end pb-2">-</div>
        
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-2">종료시간</p>
          <Dropdown
            isOpen={isOpenEnd}
            options={endTimeOptions}
            onSelect={setSelectedEnd}
            onToggle={() => setIsOpenEnd(!isOpenEnd)}
            selected={selectedEnd}
          />
        </div>
      </div>

      {selectedType && selectedStart && selectedEnd && (
        <div className="flex justify-center mb-6">
          <div className="px-6 py-2 rounded-full border border-yellow-400 text-sm">
            {`${selectedType}/${selectedStart}-${selectedEnd}`}
          </div>
        </div>
      )}

      <button className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg hover:bg-gray-200 transition-colors">
        완료
      </button>
    </div>
  );
};

export default PlaceSelector;
