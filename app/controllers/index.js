const projects = require('../data/projects.json');

const controller = {
    getHomePage (_, res) {
        res.render('home', { projects });
    },

    getStackPage (_, res) {
        res.render('stack');
    },

    getProjectDetails (req, res, next) {
        const id = Number(req.params.id);
        const project = projects.find(project => Number(project.id) === id);
        if (!project) {
            next();
        }
        res.render('project', { project })
    }
}

module.exports = controller;