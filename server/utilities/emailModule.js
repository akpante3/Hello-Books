import sendGridMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();
sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Contains methods for handling user email services
 *
 * @exports
 * @class EmailModule
 */
class EmailModule {
  /**
   * Send email message to a single user
   *
   * @static
   * @async
   * @name sendEmailToUser
   * @param {object} receiver - Object contains "name" and "email" of receiver
   * @param {string} subject - Subject of the email
   * @param {string} content - Content of the email
   * @returns {boolean} Information about whether or not the operation succeeds
   * @memberof EmailModule
   */
  static async sendEmailToUser(receiver, subject, content) {
    const emailData = {
      to: receiver,
      from: 'Hello Books <hellobooks-care@hellobooks.com>',
      subject,
      html: content
    };

    try {
      await sendGridMail.send(emailData);
      return true;
    } catch (error) {
      return false;
    }
  }
}

export default EmailModule;
