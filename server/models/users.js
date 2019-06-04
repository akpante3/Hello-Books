import pool from '../config';

/**
 *
 *
 * @export
 * @class Users
 */
export default class Users {
  /**
   *
   * User model to create user account
   * @static
   * @param {object} user
   * @returns {object} User data
   * @memberof Users
   */
  static async create(user) {
    const {
      username,
      email,
      firstname,
      lastname,
      password,
      emailConfirmCode
    } = user;
    const { rows } = await pool.query(
      `INSERT INTO 
    users
    ("userName", email, "firstName", "lastName", password, "emailConfirmCode")
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *`,
      [username, email, firstname, lastname, password, emailConfirmCode]
    );
    return rows[0];
  }

  /**
   *
   *
   * @static
   * @param {string} userData
   * @returns {object} User data according to supplied credential
   * @memberof Users
   */
  static async findUserInput(userData) {
    const column = userData.split('@').length === 2 ? 'email' : 'userName';
    const data = await pool.query(
      `SELECT * FROM users WHERE "${column}" = $1`,
      [userData]
    );
    if (data.rowCount < 1) {
      return false;
    }
    return data.rows[0];
  }

  /**
   * @static
   * @param {String} confirmCode
   * @returns {Boolean} true or false to indicate state of operation
   * @memberof Users
   */
  static async verifyEmail(confirmCode) {
    const data = await pool.query(
      `UPDATE users SET "emailConfirmCode" = Null 
      WHERE "emailConfirmCode" = $1`,
      [confirmCode]
    );
    if (!data.rowCount) {
      throw new Error('Error verifying email');
    }
    return true;
  }
}
