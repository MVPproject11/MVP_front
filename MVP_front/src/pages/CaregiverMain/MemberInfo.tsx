import React, { useState } from 'react';
import Header from 'src/components/CaregiverMain/Header';
import SideBar from 'src/components/CaregiverMain/SideBar';
import YellowToggleSwitch from '../../components/CaregiverMain/MemberInfo/Toggle';

interface MemberInfo {
  name: string;
  phone: string;
  gender: 'male' | 'female' | null;
  address: string;
  certifications: {
    caregiving: {
      number: string;
      year: string;
    };
    social: {
      number: string;
      year: string;
    };
    nursing: {
      number: string;
      year: string;
      cityCode: string;
    };
    nursingHome: {
      number: string;
    };
  };
  preferences: {
    carePossible: boolean;
    sellPossible: boolean;
  };
}

const MemberInfoForm = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [memberInfo, setMemberInfo] = useState<MemberInfo>({
    name: '김재현',
    phone: '01012345678',
    gender: 'male',
    address: '서울시 서초구 잠원동 롯데캐슬아파트 000동 0000호',
    certifications: {
      caregiving: {
        number: '1234567',
        year: '2025'
      },
      social: {
        number: '12345',
        year: '1'
      },
      nursing: {
        number: '1234567',
        year: '2025',
        cityCode: ''
      },
      nursingHome: {
        number: '123456'
      }
    },
    preferences: {
      carePossible: false,
      sellPossible: false
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
        <Header/>
    <div className="flex flex-1">
        <SideBar/>

    <div className="min-h-screen bg-gray-50 flex-1">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">회원 정보 관리</h1>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="px-4 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition-colors"
        >
          {isEditing ? '수정사항 저장' : '회원 정보 수정'}
        </button>
      </div>

      <form className="space-y-6">
        <div className="space-y-4">
          <FormField label="이름" value={memberInfo.name} disabled={!isEditing} />
          <FormField label="연락처" value={memberInfo.phone} disabled={!isEditing} />
          
          <div className="space-y-2">
            <label className="block text-sm font-medium">성별</label>
            <div className="flex gap-2">
              <GenderButton
                active={memberInfo.gender === 'male'}
                disabled={!isEditing}
                onClick={() => isEditing && setMemberInfo({...memberInfo, gender: 'male'})}
              >
                남성
              </GenderButton>
              <GenderButton
                active={memberInfo.gender === 'female'}
                disabled={!isEditing}
                onClick={() => isEditing && setMemberInfo({...memberInfo, gender: 'female'})}
              >
                여성
              </GenderButton>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">주소</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={memberInfo.address}
                disabled={!isEditing}
                className="flex-1 p-2 border rounded-lg"
              />
              {isEditing && (
                <button className="px-3 py-2 border border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-50">
                  주소찾기
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <CertificationField
            label="요양보호사 자격증"
            number={memberInfo.certifications.caregiving.number}
            year={memberInfo.certifications.caregiving.year}
            disabled={!isEditing}
          />
          <CertificationField
            label="사회복지사 자격증"
            number={memberInfo.certifications.social.number}
            year={memberInfo.certifications.social.year}
            disabled={!isEditing}
          />
          <CertificationField
            label="간호조무사 자격증 / 시도청 발급"
            number={memberInfo.certifications.nursing.number}
            year={memberInfo.certifications.nursing.year}
            disabled={!isEditing}
          />
          <CertificationField
            label="간호조무사 자격증 / 보건복지부 발급"
            number={memberInfo.certifications.nursingHome.number}
            disabled={!isEditing}
            showYear={false}
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">*차량 소유 여부</span>
            <YellowToggleSwitch
              checked={memberInfo.preferences.carePossible}
              onCheckedChange={(checked) => 
                setMemberInfo({
                  ...memberInfo,
                  preferences: {...memberInfo.preferences, carePossible: checked}
                })
              }
              disabled={!isEditing}
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">*치매교육 이수 여부</span>
            <YellowToggleSwitch
              checked={memberInfo.preferences.sellPossible}
              onCheckedChange={(checked) => 
                setMemberInfo({
                  ...memberInfo,
                  preferences: {...memberInfo.preferences, sellPossible: checked}
                })
              }
              disabled={!isEditing}
            />
          </div>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

const FormField: React.FC<{
  label: string;
  value: string;
  disabled?: boolean;
}> = ({ label, value, disabled }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium">{label}</label>
    <input
      type="text"
      value={value}
      disabled={disabled}
      className="w-full p-2 border rounded-lg"
    />
  </div>
);

const GenderButton: React.FC<{
  children: React.ReactNode;
  active: boolean;
  disabled?: boolean;
  onClick?: () => void;
}> = ({ children, active, disabled, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className={`px-4 py-2 rounded-lg border transition-colors
      ${active 
        ? 'bg-yellow-50 border-yellow-400 text-yellow-400' 
        : 'border-gray-200 text-gray-500'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-50'}`}
  >
    {children}
  </button>
);

const CertificationField: React.FC<{
  label: string;
  number: string;
  year?: string;
  disabled?: boolean;
  showYear?: boolean;
}> = ({ label, number, year, disabled, showYear = true }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium">{label}</label>
    <div className="flex gap-2">
      {showYear && (
        <input
          type="text"
          value={year}
          disabled={disabled}
          className="w-20 p-2 border rounded-lg"
          placeholder="제"
        />
      )}
      <input
        type="text"
        value={number}
        disabled={disabled}
        className="flex-1 p-2 border rounded-lg"
        placeholder="호"
      />
    </div>
  </div>
);

export default MemberInfoForm;