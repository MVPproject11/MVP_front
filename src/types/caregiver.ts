export interface Caregiver {
    id: number;
    name: string;
    gender: "M" | "F";
    phoneNumber: string;
    caregiverProfile: string;
    ownCar: boolean;
    dementiaTraining: boolean;
    desiredWage: {
      minWage: number;
      maxWage: number;
    };
    careerPeriod: number;
    mainCareer: string;
    introduction: string;
    availableStartTime: Time;
    availableEndTime: Time;
    availableDays: AvailableDay[];
    locations: Location[];
    certifications: Certification[];
  }
  
  export interface Time {
    hour: number;
    minute: number;
    second: number;
    nano: number;
  }
  
  export interface AvailableDay {
    availableDay: string;
  }
  
  export interface Location {
    city: string;
    district: string;
    dong: string;
  }
  
  export interface Certification {
    certificationType: string;
    certificationGrade: string;
    certificationNumber: string;
  }
  