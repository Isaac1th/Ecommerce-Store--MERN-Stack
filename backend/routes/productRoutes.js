import express from 'express';
const router = express.Router();
import {
  getProductById,
  getProducts,
  getTopProducts,
} from '../controllers/productController.js';

// Get all products
router.get('/', getProducts);

// Get top rated products
router.get('/top', getTopProducts);

// Get product by id
router.get('/:id', getProductById);

export default router;
