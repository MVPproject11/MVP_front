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
  <Header />
  <div className="flex flex-1">
    <SideBar />
    <div className="min-h-screen bg-gray-50 flex-1">
      {dummyData.map((card, index) => (
        <ProfileComponent
          key={index}
          imageUrl={card.imageUrl}
          name={card.name}
          status={card.status}
        />
      ))}
    </div>

  </div>
</div>
    );
  };

  export default Matching;