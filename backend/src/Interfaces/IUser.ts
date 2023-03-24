import IExperience from './IExperience';

export default interface IUser {
  id: string | undefined;
  name: string;
  email: string;
  password: string;
  location: string;
  role: string;
  description: string;
  birthDate: Date;
  socials: {
    linkedin: string;
    github: string;
    instagram: string;
  };
  experiences: IExperience[];
}
