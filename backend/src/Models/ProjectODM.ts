import { Model, Schema, model, models } from 'mongoose';
import IProject from '../Interfaces/IProject';
import AbstractODM from './AbstractODM';

class ProjectODM extends AbstractODM<IProject> {
  protected schema: Schema;
  protected model: Model<IProject>;

  constructor() {
    const schema = new Schema<IProject>({
      name: { type: String, required: true },
      author: { type: String, required: true },
      description: { type: String, required: true },
      img: { type: String, required: true },
      url: { type: String, required: true },
    });
    super(schema, 'Project');

    this.schema = schema;

    this.model = models.Project || model('Project', this.schema);
  }
  public async create(project: IProject): Promise<IProject> {
    return this.model.create({ ...project });
  }

  public async findByUserId(id: string) {
    return this.model.findOne({ author: id });
  }

  public async findByAuthor(author: string) {
    const regex = new RegExp(author, 'i');
    return this.model.find({ author: {
      $regex: regex
    } });
  }
}
export default ProjectODM;
