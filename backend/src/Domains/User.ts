import IUser from '../Interfaces/IUser';

export default class User {
  private name: string;
  private email: string;
  private _password: string;
  private location: string;
  private role: string;
  private socials: object;
  private description: string;

  constructor(user: IUser) {
    this.name = user.name;
    this.email = user.email;
    this.location = user.location;
    this.role = user.role;
    this.socials = user.socials;
    this._password = user.password;
    this.description = user.description;
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
  public getSocials(): object {
    return this.socials;
  }

  public setSocials(socials: object): void {
    this.socials = socials;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }
}
