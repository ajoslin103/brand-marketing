export type ContactUID = string;
export type ContactIndex = number;
export type ContactFirstName = string;
export type ContactLastName = string;
export type ContactCompany = string;
export type ContactEMail = string;
export type ContactPhone = string;
export type ContactAddress = string;

export interface ContactRecord {
  _id: ContactUID;
  index: ContactIndex;
  firstName: ContactFirstName;
  lastName: ContactLastName;
  company: ContactCompany;
  email: ContactEMail;
  phone: ContactPhone;
  address: ContactAddress;
}
export interface ContactHeaders {
  _id: string;
  index: string;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  address: string;
}
