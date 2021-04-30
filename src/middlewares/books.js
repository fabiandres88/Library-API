const Loans = require('../models/loans');

var availability = ((req, res, next) => {
	var { bookId } = req.params;
	Loans.find({ book: bookId })
		.then((loan) => {
			if (loan == undefined) {
				return
			} if (loan) {
				for (let i = 0; i <= loan.length - 1; i++) {
					if (loan[i].dateBack == null) {
						res.statusCode = 400;
						res.json("Book not available");
						break;
					}
				}
			}
		});
	return next();
});

module.exports = { availability };