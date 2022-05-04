const { create, listMonthCheckin } = require("../models/checkinModel");

const checkin = async function (body) {
  const data = { userId: body.id };

  const response = await create(data);

  if (response.error) {
    return { success: false, ...response.error };
  }

  return { success: true, data: response.data };
};

const listMonthlyUserCheckin = async function (id, month, year) {
  const response = await listMonthCheckin(id, month, year);

  if (response.error) {
    return { success: false, ...response.error };
  }

  return { success: true, data: response.data };
};

module.exports = {
  checkin,
  listMonthlyUserCheckin,
};
