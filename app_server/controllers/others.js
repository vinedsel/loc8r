/* GET about page */
module.exports.about = function (req, res) {
    res.render('about', { title: 'About Loc8r' });
};