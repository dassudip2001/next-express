import nodemailer, { TransportOptions } from "nodemailer";

interface CustomTransportOptions extends TransportOptions {
  port: number;
}

const transporter: nodemailer.Transporter<unknown> = nodemailer.createTransport(
  {
    port: parseInt(process.env.SMTP_PORT || "0", 10),
    host: process.env.SMTP_HOST,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  } as CustomTransportOptions
);

export const sendMail = async (to: string, subject: string, body: string) => {
  await transporter.sendMail({
    from: process.env.FROM_EMAIL, // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    html: body, // html body
  });
};
