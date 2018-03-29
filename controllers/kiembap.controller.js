const nodemailer = require('nodemailer');
const bittrex = require('node-bittrex-api');

const transporter = nodemailer.createTransport({
  service: 'SendGrid',
  auth: {
    user: process.env.SENDGRID_USER,
    pass: process.env.SENDGRID_PASSWORD
  }
});

/**
 * GET /contact
 * Contact form page.
 */
exports.getKiembap = (req, res) => {
  res.render('contact', {
    title: 'Contact'
  });
};

/**
 * POST /contact
 * Send a contact form via Nodemailer.
 */
exports.postKiembap = (req, res) => {
  // req.assert('name', 'Name cannot be blank').notEmpty();
  // req.assert('email', 'Email is not valid').isEmail();
  // req.assert('message', 'Message cannot be blank').notEmpty();
  //
  // const errors = req.validationErrors();
  //
  // if (errors) {
  //   req.flash('errors', errors);
  //   return res.redirect('/contact');
  // }
  //
  // const mailOptions = {
  //   to: 'your@email.com',
  //   from: `${req.body.name} <${req.body.email}>`,
  //   subject: 'Contact Form | Hackathon Starter',
  //   text: req.body.message
  // };
  //
  // transporter.sendMail(mailOptions, (err) => {
  //   if (err) {
  //     req.flash('errors', { msg: err.message });
  //     return res.redirect('/contact');
  //   }
  //   req.flash('success', { msg: 'Email has been sent successfully!' });
  //   res.redirect('/contact');
  // });

  // bittrex.options({
  //   'apikey' : '84439e5541064e27ba969bda98eeb221',
  //   'apisecret' : 'b9ba5a9ea7994b7f9b152c5a031eb806',
  // });
  // bittrex.getmarketsummaries( function( data, err ) {
  //   if (err) {
  //     return console.error(err);
  //   }
  //   for( var i in data.result ) {
  //     bittrex.getticker( { market : data.result[i].MarketName }, function( ticker ) {
  //       console.log( ticker );
  //     });
  //   }
  // });
  // bittrex.websockets.client(function() {
  //   console.log('Websocket connected');
  //   bittrex.websockets.subscribe(['BTC-ETH'], function(data) {
  //     if (data.M === 'updateExchangeState') {
  //       data.A.forEach(function(data_for) {
  //         console.log('Market Update for '+ data_for.MarketName, data_for);
  //       });
  //     }
  //   });
  // });

  bittrex.getticker({market: 'BTC-LTC'}, function (ticker) {
    console.log(ticker);
    res.redirect('/contact');;
  });
};
