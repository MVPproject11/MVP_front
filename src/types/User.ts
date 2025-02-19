export interface UserData {
    name: string;
    phone: string;
    gender: string;
    workAreas: string[];
    workHours: { day: string; time: string }[];
    certificates: { type: string; year: string; number: string }[];
    minWage: number;
    maxWage: number;
    imageUrl: string;
  }
  