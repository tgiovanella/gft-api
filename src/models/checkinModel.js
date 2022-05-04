require("./connections/mongoDbConnection");
const checkingSchema = require("./schemas/checkinSchema");

const create = function (data) {
  return new Promise((resolve, reject) => {
    checkingSchema.create(data, (error, data) => {
      if (error) reject({ error: true, ...error });
      resolve({ error: false, data: data });
    });
  });
};

const listMonthCheckin = function (userId, month, year) {
  return new Promise((resolve, reject) => {
    checkingSchema.find(
      {
        $expr: {
          $and: [
            { $eq: [userId, userId] },
            { $eq: [{ $month: "$dateCheckin" }, month] },
            { $eq: [{ $year: "$dateCheckin" }, year] },
          ],
        },
      },
      (error, data) => {
        if (error) reject({ error: true, ...error });

        resolve({ error: false, data: data });
      }
    );
  });
};

module.exports = {
  create,
  listMonthCheckin,
};
