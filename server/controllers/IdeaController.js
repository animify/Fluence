import models from '../models';
import logger from '../helpers/logger';

export default class IdeaController {
    static new(summary, details, category, by) {
        const idea = new models.Idea();

        idea.summary = summary;
        idea.details = details;
        idea.category = category;
        idea.by = by;
        idea.comments = [];

        idea.save((err, i) => {
            logger.info(i);
        });
    }
}
