import bycrpt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

<<<<<<< HEAD
=======

>>>>>>> Merge with develop
/**
 *
 *
 * @export
 * @class encrypt
 */
export default class encrypt {
  /**
   *
   * Encrypt User Password
   * @static
   * @param {string} password
   * @returns {string} Encrypted Password
   * @memberof encrypt
   */
  static encryptPassword(password) {
    return bycrpt.hash(password, 10);
  }

<<<<<<< HEAD
=======

>>>>>>> Merge with develop
  /**
   *
   * Decrypt User Password
   * @static
   * @param {string} inputPassword
   * @param {string} encryptedPassword
   * @returns {boolen} True if valid
   * @memberof encrypt
   */
  static decryptPassword(inputPassword, encryptedPassword) {
    return bycrpt.compare(inputPassword, encryptedPassword);
  }

<<<<<<< HEAD
=======

>>>>>>> Merge with develop
  /**
   *
   * Generate user token
   * @static
   * @param {object} user
   * @returns {string} Token
   * @memberof encrypt
   */
  static generateToken(user) {
    const payload = { id: user.id, email: user.email, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '24h'
    });
    return token;
  }
}
