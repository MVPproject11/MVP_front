export interface JobPost {
    id: number;
    workType: "VISIT_CARE" | "HOSPITAL_CARE";
    workAddress: string;
    isTimeNegotiable: boolean;
    wageType: "HOURLY" | "MONTHLY";
    wageAmount: number;
    benefits: string;
    needMember: number;
    status: string;
    postStartTime: string;
    postEndTime: string;
    managerPhone: string;
    managerEmail: string;
    message: string;
  }