import MyOperator from "./operator";

const operator = new MyOperator();
operator.start();

const exit = (reason: string) => {
  operator.stop();
  process.exit(0);
};

process.on("SIGTERM", () => exit("SIGTERM")).on("SIGINT", () => exit("SIGINT"));
