import { Model, Schema, model, models } from 'mongoose';
import IUser from '../Interfaces/IUser';
import AbstractODM from './AbstractODM';

class UserODM extends AbstractODM<IUser> {
  protected schema: Schema;
  protected model: Model<IUser>;

  constructor() {
    const schema = new Schema<IUser>({
      name: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: String, required: true},
      location: { type: String, required: true },
      role: { type: String, required: true },
      socials: {
        linkedin: { type: String, required: true },
        github: { type: String, required: true },
        instagram: { type: String, required: true },
      },
      description: { type: String, required: true },
    });
    super(schema, 'User');

    this.schema = schema;

    this.model = models.User || model('User', this.schema);
  }
  public async create(user: IUser): Promise<IUser> {
    return this.model.create({ ...user });
  }

  public async findByEmail(email: string) {
    return this.model.findOne({ email });
  }
}
export default UserODM;
