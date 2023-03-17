import User from '../Domains/User';
import IUser from '../Interfaces/IUser';
import IError from '../Interfaces/IError';
import UserODM from '../Models/UserODM';

const NOT_FOUND_ERROR = {
  type: 'notFound', message: 'User not found',
} as IError;

export default class UserService {
  private createUserDomain(user: IUser): User {
    return new User(user);
  }

  public async create(user: IUser): Promise<User | null | undefined> {
    const userODM = new UserODM();
    const newUser = await userODM.create(user);

    return this.createUserDomain(newUser);
  }

  public async getAll(): Promise<(User | null)[] > {
    const userODM = new UserODM();
    const users = await userODM.get();

    if (users.length) return users.map(this.createUserDomain);

    throw NOT_FOUND_ERROR;
  }

  public async findById(id: string): Promise<User | null> {
    const userODM = new UserODM();
    const user = await userODM.find(id);

    if (user) return this.createUserDomain(user);

    throw NOT_FOUND_ERROR;
  }

  public async updateById(id: string, user: IUser): Promise<User | null> {
    const userODM = new UserODM();
    const updatedUser = await userODM.findOneAndUpdate(id, user);

    if (updatedUser) return this.createUserDomain(updatedUser);

    throw NOT_FOUND_ERROR;
  }

  public async removeById(id: string): Promise<null> {
    const userODM = new UserODM();
    const user = await userODM.findByIdAndRemove(id);
    
    if (user) return null;

    throw NOT_FOUND_ERROR;
  }
}