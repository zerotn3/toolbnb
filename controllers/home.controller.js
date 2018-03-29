/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Từ bình thường trở thành ông chủ thành đạt và giàu có'
  });
};
