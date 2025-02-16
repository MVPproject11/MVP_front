import React from "react";
import ProfileComponent from "src/components/CaregiverMain/Matching/MatchingCard";
import Header from "src/components/CaregiverMain/Header";
import SideBar from "src/components/CaregiverMain/SideBar";

interface MatchingCardProps {
    imageUrl: string;
    name: string;
    status: 'active' | 'inactive';
  }
  
  const dummyData: MatchingCardProps[] = [
    {
      imageUrl: '/api/placeholder/200/200',
      name: '홍길동 어르신',
      status: 'active'
    },
    {
      imageUrl: '/api/placeholder/200/200',
      name: '홍길동 어르신',
      status: 'active'
    },
    {
      imageUrl: '/api/placeholder/200/200',
      name: '홍길동 어르신',
      status: 'active'
    },
    {
      imageUrl: '/api/placeholder/200/200',
      name: '김영희 어르신',
      status: 'inactive'
    },
    {
      imageUrl: '/api/placeholder/200/200',
      name: '김영희 어르신',
      status: 'inactive'
    },
    {
      imageUrl: '/api/placeholder/200/200',
      name: '김영희 어르신',
      status: 'inactive'
    }
  ];
  

const Matching = () => {
    return (
        <div className="min-h-screen flex flex-col">
        <Header/>
        <div className="flex flex-1">
        <SideBar/>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-yellow-500">매칭 관리</h1>
        <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <button>
          {dummyData.map((card, index) => (
            <ProfileComponent
              key={index}
              imageUrl={card.imageUrl}
              name={card.name}
              status={card.status}
            />
          ))}
        </button>
        </div>
      </div>
      </div>
      </div>
    );
  };

  export default Matching;