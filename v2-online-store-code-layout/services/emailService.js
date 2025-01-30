// services/emailService.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

exports.sendOrderConfirmation = async (email, order) => {
    const mailOptions = {
        from: 'Online Store <noreply@onlinestore.com>',
        to: email,
        subject: 'Order Confirmation',
        html: `<h1>Thank you for your order!</h1>
          <p>Order ID: ${order._id}</p>
          <p>Total: $${order.total}</p>`
    };

    await transporter.sendMail(mailOptions);
};