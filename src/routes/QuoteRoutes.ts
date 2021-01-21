import { Router } from 'express';
import { getQuoteById, getRandomQuote } from '../controllers/QuoteController';

const router = Router();

router.get('/', getRandomQuote);
router.get('/:id', getQuoteById);

export { router as quoteRoutes };