import { Queue, Worker, Job } from "bullmq";
import { defaultQueueoptions, raidsConnection } from "../config/queue.js";
import { sendMail } from "../config/mail.js";

export interface QueueDataT {
  to: string;
  subject: string;
  body: string;
}

export const emailQueueName = "emailQueue";
export const emailQueue = new Queue(emailQueueName, {
  connection: raidsConnection,
  defaultJobOptions: defaultQueueoptions,
});

// worker
export const queueWorker = new Worker(
  emailQueueName,
  async (job: Job) => {
    console.log(`Processing job ${job.id}`);
    console.log(job.data);
    const data: QueueDataT = job.data;
    console.log(data);
    await sendMail(data.to, data.subject, data.body);
    // send email
    // sendEmail(job.data.email, job.data.subject, job.data.body);
    console.log(`Job ${job.id} processed`);
  },
  {
    connection: raidsConnection,
  }
);
