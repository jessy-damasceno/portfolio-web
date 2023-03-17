import {
  Model,
  models,
  Schema,
  model,
  isValidObjectId,
  UpdateQuery,
} from 'mongoose';
import IError from '../Interfaces/IError';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  private validateMongoId(id: string): void {
    if (!isValidObjectId(id))
      throw { type: 'typeError', message: 'Invalid mongo id' } as IError;
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async get(): Promise<T[]> {
    return this.model.find();
  }

  public async find(id: string): Promise<T | null> {
    this.validateMongoId(id);

    return this.model.findOne({ _id: id });
  }

  public async findOneAndUpdate(id: string, obj: T): Promise<T | null> {
    this.validateMongoId(id);

    return this.model.findOneAndUpdate(
      { _id: id },
      { ...obj } as UpdateQuery<T>,
      { new: true }
    );
  }

  public async findByIdAndRemove(id: string) {
    this.validateMongoId(id);

    return this.model.findByIdAndDelete(id);
  }
}

export default AbstractODM;
