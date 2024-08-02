import { DefaultJobOptions, ConnectionOptions } from "bullmq";

export const raidsConnection: ConnectionOptions = {
  host: process.env.REDIS_HOST,
  port: 6379,
};

export const defaultQueueoptions: DefaultJobOptions = {
  removeOnComplete: {
    age: 60 * 60,
    count: 20,
  },
  attempts: 3,
  backoff: {
    type: "exponential",
    delay: 1000,
  },
  removeOnFail: true,
};
