import type IExperience from './IExperience';

export default interface IUser {
  name: string;
  email: string;
  password: string;
  location: string;
  role: string;
  description: string;
  birthDate: string;
  socials: {
    linkedin: string;
    github: string;
    instagram: string;
  };
  experiences: IExperience[];
}
