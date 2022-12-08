function router(app) {
  app.use('/news', require('./src/newsRoutes'));
}

module.exports = router;
