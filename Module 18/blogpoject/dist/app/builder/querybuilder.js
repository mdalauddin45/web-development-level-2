"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QueryBuilder {
    constructor(modelQuery, query) {
        this.modelQuery = modelQuery;
        this.query = query;
    }
    search(searchableFields) {
        var _a;
        const searchTerm = (_a = this.query) === null || _a === void 0 ? void 0 : _a.searchTerm;
        if (searchTerm) {
            this.modelQuery = this.modelQuery.find({
                $or: searchableFields.map((field) => ({
                    [field]: { $regex: searchTerm, $options: 'i' },
                })),
            });
        }
        return this;
    }
    filter() {
        const queryObj = Object.assign({}, this.query);
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
        var _a, _b;
        const page = Number((_a = this.query) === null || _a === void 0 ? void 0 : _a.page) || 1;
        const limit = Number((_b = this.query) === null || _b === void 0 ? void 0 : _b.limit) || 10;
        const skip = (page - 1) * limit;
        this.modelQuery = this.modelQuery.skip(skip).limit(limit);
        return this;
    }
    sort() {
        var _a, _b, _c, _d;
        let sortStr;
        if (((_a = this.query) === null || _a === void 0 ? void 0 : _a.sortBy) && ((_b = this.query) === null || _b === void 0 ? void 0 : _b.sortOrder)) {
            const sortBy = (_c = this.query) === null || _c === void 0 ? void 0 : _c.sortBy;
            const sortOrder = (_d = this.query) === null || _d === void 0 ? void 0 : _d.sortOrder;
            sortStr = `${sortOrder === 'desc' ? '-' : ''}${sortBy}`;
        }
        if (sortStr) {
            this.modelQuery = this.modelQuery.sort(sortStr);
        }
        return this;
    }
    select() {
        var _a, _b;
        let fields = '-__v';
        if ((_a = this.query) === null || _a === void 0 ? void 0 : _a.fields) {
            fields = (_b = this.query.fields) === null || _b === void 0 ? void 0 : _b.split(',').join(' ');
        }
        this.modelQuery = this.modelQuery.select(fields);
        return this;
    }
}
exports.default = QueryBuilder;