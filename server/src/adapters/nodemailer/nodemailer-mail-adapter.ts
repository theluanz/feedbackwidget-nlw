import { MailAdapter, SendMailData } from '../mail-adapter';
import nodemailer from 'nodemailer';
import { env } from 'process';
require('dotenv').config();

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: env.USER_MAILTRAP,
    pass: env.PASS_MAILTRAP,
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    transport.sendMail({
      from: 'Equipe Thz <oi@nlw.com',
      to: 'Luan <test@test.com>',
      subject: subject,
      html: body,
    });
  }
}
