const News = require("./../services/NewsService");


async function listNews(request, response) {
    try {
        const search = { archiveDate: { $eq: null } };
        const sort = { date: -1 };
        const news = await News.listNews(search, sort);
        return  response.status(200).json({
            success: true,
            data: news
        });
    } catch (error) {
        return response.status(500).json({
            success: false,
            message: `An error has occurred ${error.message}`,
        });
    }
}

async function listArchived(request, response) {
    try {
        const search = { archiveDate: { $nin: null } };
        const sort = { archiveDate: -1 };
        const news = await News.listArchived(search, sort);
        return  response.status(200).json({
            success: true,
            data: news
        });
    } catch (error) {
        return response.status(500).json({
            success: false,
            message: `An error has occurred ${error.message}`,
        });
    }
}

async function addNews(request, response) {
    try {
        const { title, description, content, author } = request.body;
        if (!title || !description || !content || !author) {
            return  response.status(400).json({
                success: false,
                message: "Missing data for the news.",
            });
        }
        const date= new Date();
        const news = {
            title,
            description,
            content,
            date,
            author
        };
        await News.add(news);
        return  response.status(201).json({
            success: true,
            message: "The news has been created.",
        });
    } catch (error) {
        return response.status(500).json({
            success: false,
            message: `An error has occurred ${error.message}`,
        });
    }
}

async function updateNews(request, response) {
    try {
        const { id } = request.params;
        const archiveDate = new Date();
        const news = await News.update(id, archiveDate);
        return  response.status(200).json({
            success: true,
            message: "The news has been archived.",
            data: news
        });
    } catch (error) {
        return response.status(500).json({
            success: false,
            message: `An error has occurred ${error.message}`,
        });
    }
}


async function destroyNews(request, response) {
    try {
        const { id } = request.params;
        await News.delete(id);
        return  response.status(200).json({
            success: true,
            message: "The news has been removed.",
        });
    } catch (error) {
        return response.status(500).json({
            success: false,
            message: `An error has occurred ${error.message}`,
        });
    }
}

module.exports = {
    listNews: (request, response) => listNews(request, response),
    listArchived: (request, response) => listArchived(request, response),
    addNews: (request, response) => addNews(request, response),
    updateNews: (request, response) => updateNews(request, response),
    destroyNews: (request, response) => destroyNews(request, response),
};
