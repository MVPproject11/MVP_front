import React, { useState } from "react";
import ElderCard from "src/components/CaregiverMain/Matching/MatchingCard";  // 노인 카드 컴포넌트로 수정
import styled from 'styled-components';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { Home, Users, Settings } from 'lucide-react';
import { useElders } from "../../hook/useElder";  // 어르신 목록 가져오는 훅
import { useCaregivers } from "../../hook/useCaregivers";  // Caregiver 훅
import Dummy1 from "../../assets/image/MainDummy1.png";
import Dummy2 from "../../assets/image/MainDummy2.png";
import Dummy3 from "../../assets/image/MainDummy3.png";

const Container = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  height: 4rem;
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
`;

const Sidebar = styled.aside`
  width: 15rem;
  min-height: calc(100vh - 4rem);
  background-color: white;
  border-right: 1px solid #e5e7eb;
  padding: 1.5rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  max-width: 64rem;
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;



const NavItem = styled.a<{ active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: ${(props) => (props.active ? '#eab308' : '#374151')};
  background-color: ${(props) => (props.active ? '#fef9c3' : 'transparent')};
  border-radius: 0.5rem;
  text-decoration: none;
  &:hover {
    background-color: #f3f4f6;
  }
`;

const GridWrapper = styled.div`
  padding: 1.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const BomListenTwo = () => {

    const images = [
        Dummy1,
        Dummy2,
        Dummy3
      ];
    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };

  return (
    <Container>
      <Header>
        <span className="text-xl font-bold">함께돌봄</span>
        <button>🔔</button>
      </Header>
      <ContentWrapper>
        <Sidebar>
          <Nav>
                      <NavItem href="/SeniorRegistration">
                        <Home size={20} style={{ marginRight: '0.75rem' }} /> 어르신 정보 등록
                      </NavItem>
                      <NavItem href="/matchingDetail">
                        <Users size={20} style={{ marginRight: '0.75rem' }} /> 매칭 요청
                      </NavItem>
                      <NavItem href="/matchingManage" active>
                        <Settings size={20} style={{ marginRight: '0.75rem' }} /> 매칭 관리
                      </NavItem>
                      <NavItem href="/myprofile">
                        <Settings size={20} style={{ marginRight: '0.75rem' }} /> 내 정보 관리
                      </NavItem>
                    </Nav>
        </Sidebar>
        <MainContent>
          <GridWrapper>
            <Title>봄소식</Title>
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index}>
                    <img src={src} alt={`Slide ${index}`} style={{ width: "100%", height: "auto" }} />
                    </div>
                ))}
                </Slider>
          </GridWrapper>

          <GridWrapper>
            <Title>봄바람</Title>
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index}>
                    <img src={src} alt={`Slide ${index}`} style={{ width: "100%", height: "auto" }} />
                    </div>
                ))}
                </Slider>
          </GridWrapper>
        </MainContent>
      </ContentWrapper>
    </Container>  
  );
};

export default BomListenTwo;
