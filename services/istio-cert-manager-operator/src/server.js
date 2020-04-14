const express = require("express");
const bodyParser = require("body-parser");
const operator = require("./operator");
const server = express();

server.use(bodyParser.json());

const exceptionHandler = (req, res, e) => {
  console.error(e);
  const b = {
    apiVersion: req.body.apiVersion,
    kind: "AdmissionReview",
    response: {
      uid: req.body.request.uid,
      allowed: false,
      status: {
        code: e.statusCode || 500,
        message: e.toString(),
      },
    },
  };
  return res.status(e.statusCode || 500).send(b);
};

server.use("/", async (req, res) => {
  const body = req.body;
  const operation = body.request.operation;
  const kind = body.request.kind.kind;

  try {
    await operator.onChange(operation, kind, body.request);
  } catch (e) {
    return exceptionHandler(req, res, e);
  }

  // Satisfy k8s
  const b = {
    apiVersion: body.apiVersion,
    kind: "AdmissionReview",
    response: {
      uid: body.request.uid,
      allowed: true,
    },
  };
  res.send(b);
});

module.exports = {
  listen: (port) => server.listen(port),
};
