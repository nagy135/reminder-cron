import cron from "node-cron";

const url = "https://infiniter.tech/api/cron";

cron.schedule("* * * * *", () => {
  fetch(url).then(() => {
    const now = new Date();
    console.log("Send email! " + now);
  });
});
