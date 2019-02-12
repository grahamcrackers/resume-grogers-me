import { IExperienceDetails } from "./IExperienceDetails";

export interface IExperience {
    position: string;
    details: IExperienceDetails[];
    accomplishments: string[];
}