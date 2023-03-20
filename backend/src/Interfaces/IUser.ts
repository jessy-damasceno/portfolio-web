export default interface IUser {
  name: string;
  email: string;
  password: string;
  location: string;
  role: string;
  socials: {
    linkedin: string;
    github: string;
    instagram: string;
  };
}
