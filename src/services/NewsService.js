require('../DBConnections/mongodb');
const News = require("../models/NewsModel");

function NewsService() {
    return {
        listNews: (search, sort) => News.find(search).sort(sort),
        listArchived: (search, sort) => News.find(search).sort(sort),
        add: data => new News(data).save(),
        update: (id, data) => News.findOneAndUpdate({ _id: id }, { archiveDate: data }, { new: true }),
        delete: id => News.findByIdAndDelete(id)
    };
}

module.exports = NewsService();