import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendMail = async (to: string, subject: string, body: string) => {
  await transporter.sendMail({
    from: process.env.FROM_EMAIL, // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    html: body, // html body
  });
};
