const {
  checkin,
  listMonthlyUserCheckin,
} = require("../controllers/checkinController");

const checkingRoutes = (app) => {
  app.post("/checkin", async (req, res) => {
    const body = req.body;

    const response = await checkin(body);

    if (response.success === false) {
      res.status(400).json({ success: false, error: response.error });
      return;
    }
    res.status(200).json({ success: true, data: response.data });
  });

  app.get("/checkin/:user_id/:month?/:year?", async (req, res) => {
    const id = req.params.user_id;
    const month = req.params.month
      ? parseInt(req.params.month)
      : new Date().getMonth();
    const year = req.params.year
      ? parseInt(req.params.year)
      : new Date().getFullYear();

    const response = await listMonthlyUserCheckin(id, month, year);

    if (response.success === false) {
      res.status(400).json({ success: false, error: response.error });
      return;
    }
    res.status(200).json({ success: true, data: response.data });
  });
};

module.exports = checkingRoutes;
