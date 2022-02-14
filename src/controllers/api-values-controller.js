const values = (req, res) => {
  const { data } = req.body;
  const works = {
    name: "Api Example",
    status: true,
  };
  return res.status(200).json(works);
};

module.exports = {
  values,
};
