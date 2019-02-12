import { IPositionDetail } from "./IPositionDetail";

export interface IPosition {
    position: string;
    details: IPositionDetail[];
    accomplishments: string[];
}