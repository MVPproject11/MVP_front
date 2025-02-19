import { SocialWorker } from "./socialworker";
import { Elder } from "./elder";
import { JobPost } from "./jobpost";
import { Caregiver } from "./caregiver";

export interface Matching {
    matchingId: number;
    caregiverId: number;
    caregiverName: string;
    matchingStatus: "WAITING" | "APPROVED" | "REJECTED";
    progressStatus: "RESPONSE" | "COMPLETED";
    requestDate: string;
    responseDate: string;
    socialWorker: SocialWorker;
    elder: Elder;
    jobPost: JobPost;
    caregiver: Caregiver;
  }