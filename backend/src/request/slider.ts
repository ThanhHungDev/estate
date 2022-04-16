import { check } from "express-validator"


export default {
    store : [
        check('src', 'src does not Empty').not().isEmpty(),
        check('src', 'src must be at least 5 chars').isLength({ min: 2 }),
        check('alt', 'alt does not Empty').not().isEmpty(),
        check('alt', 'alt must be at least 5 chars').isLength({ min: 2 }),
        check('topic', 'topic does not Empty').not().isEmpty(),
        check('topic', 'topic must be at least 5 chars').isLength({ min: 2 }),
        check('title', 'title does not Empty').not().isEmpty(),
        check('title', 'title must be at least 5 chars').isLength({ min: 2 }),
        check('excerpt', 'excerpt does not Empty').not().isEmpty(),
        check('excerpt', 'excerpt must be at least 5 chars').isLength({ min: 2 }),
        check('content', 'content does not Empty').not().isEmpty(),
        check('content', 'content must be at least 5 chars').isLength({ min: 2 }),
    ]
}