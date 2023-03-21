import IProject from '../Interfaces/IProject';

export default class Project {
  private name: string;
  private author: string;
  private description: string;
  private img: string;
  private url: string;

  constructor(project: IProject) {
    this.name = project.name;
    this.author = project.author;
    this.description = project.description;
    this.img = project.img;
    this.url = project.url;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getAuthor(): string {
    return this.author;
  }

  public setAuthor(author: string): void {
    this.author = author;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public getImg(): string {
    return this.img;
  }

  public setImg(img: string): void {
    this.img = img;
  }

  public getUrl(): string {
    return this.url;
  }

  public setUrl(url: string): void {
    this.url = url;
  }
}
