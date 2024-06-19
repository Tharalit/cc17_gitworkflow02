module.exports = (req, res, next) => {
  res.this.status(404).json({ msg: "Path not found" });
};
