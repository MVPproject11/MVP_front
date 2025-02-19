import {Time} from "./caregiver";

export interface Elder {
    id: number;
    name: string;
    birth: string;
    gender: "M" | "F";
    careGrade: string;
    elderPhoto: string;
    elderAddress: string;
    weight: number;
    disease: string;
    housemate: string;
    symptomsDementia: string;
    careStartTime: Time;
    careEndTime: Time;
    careDays: DayOfWeek[];
    mealAssists: Assist[];
    excretionAssists: Assist[];
    moveAssists: Assist[];
    dailyLivingAssists: Assist[];
    socialWorkerIds: SocialWorkerId[];
  }
  
  interface DayOfWeek {
    dayOfWeek: string;
  }
  
  interface Assist {
    type: string;
  }
  
  interface SocialWorkerId {
    socialWorkerId: number;
  }