import models from '../models';
import logger from '../helpers/logger';

export default class IdeaController {
    static new(summary, details, category, by) {
        return new Promise((resolve, reject) => {
            const idea = new models.Idea();

            idea.summary = summary;
            idea.details = details;
            idea.category = category;
            idea.by = by;
            idea.comments = [];

            idea.save((err, i) => {
                logger.error(err);
                logger.info(i);

                if (err) {
                    return reject(err);
                }

                resolve(i);
            });
        });
    }
}
