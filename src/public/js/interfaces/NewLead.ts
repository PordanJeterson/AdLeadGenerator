import { LeadType } from "../enums/LeadType";

export interface NewLeadInterface {
    [key: string]: string;

    zipCode: string;
    firstName: string;
    lastName: string;
    leadType: LeadType;
    state: string;
}