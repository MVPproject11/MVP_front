import styled from 'styled-components';
import { Home, Users, Settings } from 'lucide-react';
import React, { useState } from 'react';
import { useCaregiver } from 'src/hook/useCaregivers';
import PlaceSelector from 'src/components/modals/PlaceSelector';
import TimePickerModal from "src/components/modals/TimePickerModal";
import { Location } from 'src/types/caregiver';

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

const ContentWrapper = styled.div`
    display: flex;
    flex: 1;
`;

const MainContent = styled.main`
    flex: 1;
    padding: 2rem;
    max-width: 64rem;
`;

const WorkConditions = () => {
    const { update, caregiver } = useCaregiver();

    const [workTimes, setWorkTimes] = useState<string[]>(caregiver?.availableDays.map(day => day.availableDay) || []);
    const [minWage, setMinWage] = useState<number>(caregiver?.desiredWage?.minWage || 12000);
    const [maxWage, setMaxWage] = useState<number>(caregiver?.desiredWage?.maxWage || 15000);
    const [regions, setRegions] = useState<Location[]>(caregiver?.locations || []);
    const [isPlaceSelectorOpen, setIsPlaceSelectorOpen] = useState(false);
    const [isTimeSelectorOpen, setIsTimeSelectorOpen] = useState(false);

    const handleRegionAdd = (selectedRegion: Location) => {
        if (!regions.some(region => region.city === selectedRegion.city && region.district === selectedRegion.district)) {
            setRegions((prev) => [...prev, selectedRegion]);
        }
    };

    const handleWorkTimeAdd = (selectedTime: string) => {
        if (!workTimes.includes(selectedTime)) {
            setWorkTimes((prev) => [...prev, selectedTime]);
        }
    };

    const handleSave = async () => {
        await update({
            locations: regions,
            availableDays: workTimes.map(day => ({ availableDay: day })),
            desiredWage: { minWage, maxWage },
        });
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
                        <NavItem href="/profile"><Home size={20} style={{ marginRight: '0.75rem' }} /> 내 프로필</NavItem>
                        <NavItem href="/work-settings" active><Users size={20} style={{ marginRight: '0.75rem' }} /> 근무 조건 설정</NavItem>
                        <NavItem href="/matching"><Settings size={20} style={{ marginRight: '0.75rem' }} /> 매칭 관리</NavItem>
                        <NavItem href="/settings"><Settings size={20} style={{ marginRight: '0.75rem' }} /> 회원 정보 관리</NavItem>
                    </Nav>
                </Sidebar>
                <MainContent>
                    <section>
                        <h3>근무 가능 지역</h3>
                        <div>
                            {regions.map((region, idx) => (
                                <span key={idx}>{region.city} {region.district} {region.dong}</span>
                            ))}
                            <button onClick={() => setIsPlaceSelectorOpen(true)}>+ 지역추가</button>
                            {isPlaceSelectorOpen && (
                                <PlaceSelector onClose={() => setIsPlaceSelectorOpen(false)} onSelect={handleRegionAdd} />
                            )}
                        </div>
                    </section>
                    <section>
                        <h3>근무 가능 시간</h3>
                        <div>
                            {workTimes.map((time, idx) => (
                                <span key={idx}>{time}</span>
                            ))}
                            <button onClick={() => setIsTimeSelectorOpen(true)}>+ 시간추가</button>
                            {isTimeSelectorOpen && (
                                <TimePickerModal onClose={() => setIsTimeSelectorOpen(false)} onSelect={handleWorkTimeAdd} />
                            )}
                        </div>
                    </section>
                    <section>
                        <h3>희망시급</h3>
                        <input type="number" value={minWage} onChange={(e) => setMinWage(Number(e.target.value))} /> ~
                        <input type="number" value={maxWage} onChange={(e) => setMaxWage(Number(e.target.value))} />
                    </section>
                    <button onClick={handleSave}>저장</button>
                </MainContent>
            </ContentWrapper>
        </Container>
    );
};

export default WorkConditions;