import { Idea, User } from '../models';
import logger from '../helpers/logger';

export default class IdeaController {
    static new(summary, details, category, by) {
        return new Promise((resolve, reject) => {
            const idea = new Idea();

            idea.summary = summary;
            idea.details = details;
            idea.category = category;
            idea.by = by;
            idea.comments = [];
            idea.votes = [{
                by
            }];

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

    static get() {
        return new Promise((resolve, reject) => {
            Idea.find({}, (err, ideas) => {
                logger.error(err);
                logger.info(ideas);

                if (err) {
                    return reject(err);
                }

                resolve(ideas);
            });
        });
    }

    static getOne(ideaId) {
        logger.info(`getting idea ${ideaId}`);
        return new Promise((resolve, reject) => {
            Idea.findOne({ _id: ideaId })
                .populate('by votes.by', '_id name avatar email', User)
                .exec((err, idea) => {
                    logger.error(err);
                    logger.info(idea);

                    if (err) {
                        return reject(err);
                    }

                    resolve(idea);
                });
        });
    }
}
