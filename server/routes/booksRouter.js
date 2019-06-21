import express from 'express';
import bookController from '../controllers/booksController';
import Auth from '../middlewares/auth';
import BookValidation from '../middlewares/bookValidation';
import Roles from '../middlewares/roles';

const { verifyToken } = Auth;
const { validateBookAdd, validateBookVerification } = BookValidation;
const { restrictUser, admin } = Roles;

const {
  addBook,
  getSingleBook,
  getAllBooks,
  adminUpdateVerification,
  deleteABook
} = bookController;

const router = express.Router();

router.post('/', verifyToken, validateBookAdd, restrictUser, addBook);
router.get('/', getAllBooks);
router.get('/:id', getSingleBook);
router.patch(
  '/:id',
  verifyToken,
  admin,
  validateBookVerification,
  adminUpdateVerification
);
router.delete('/:id', verifyToken, admin, deleteABook);

export default router;
