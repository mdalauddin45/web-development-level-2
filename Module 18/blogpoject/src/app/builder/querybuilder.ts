import { FilterQuery, Query } from 'mongoose';

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  search(searchableFields: string[]) {
    const searchTerm = this.query?.searchTerm as string;

    if (searchTerm) {
      this.modelQuery = this.modelQuery.find({
        $or: searchableFields.map((field) => ({
          [field]: { $regex: searchTerm, $options: 'i' },
        })),
      } as FilterQuery<T>);
    }

    return this;
  }

  filter() {
    const queryObj = { ...this.query };
    const excludingImportant = [
      'searchTerm',
      'page',
      'limit',
      'sortOrder',
      'sortBy',
      'fields',
    ];

    excludingImportant.forEach((key) => delete queryObj[key]);

    this.modelQuery = this.modelQuery.find(queryObj);

    return this;
  }

  paginate() {
    const page = Number(this.query?.page) || 1;
    const limit = Number(this.query?.limit) || 10;
    const skip = (page - 1) * limit;

    this.modelQuery = this.modelQuery.skip(skip).limit(limit);

    return this;
  }

  sort() {
    let sortStr;

    if (this.query?.sortBy && this.query?.sortOrder) {
      const sortBy = this.query?.sortBy as string;
      const sortOrder = this.query?.sortOrder as string;
      sortStr = `${sortOrder === 'desc' ? '-' : ''}${sortBy}`;
    }

    if (sortStr) {
      this.modelQuery = this.modelQuery.sort(sortStr);
    }

    return this;
  }

  select() {
    let fields = '-__v';

    if (this.query?.fields) {
      fields = (this.query.fields as string)?.split(',').join(' ');
    }

    this.modelQuery = this.modelQuery.select(fields);

    return this;
  }
}

export default QueryBuilder;
