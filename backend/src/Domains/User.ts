import IUser from '../Interfaces/IUser';

export default class User {
  private name: string;
  private email: string;
  private location: string;
  private role: string;

  constructor(user: IUser) {
    this.name = user.name;
    this.email = user.email;
    this.location = user.location;
    this.role = user.role;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public getLocation(): string {
    return this.location;
  }

  public setLocation(location: string): void {
    this.location = location;
  }

  public getRole(): string {
    return this.role;
  }

  public setRole(role: string): void {
    this.role = role;
  }
}
