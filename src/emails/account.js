const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jginsberg3@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}.  Let me know how you get along with the app.`,
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jginsberg3@gmail.com',
        subject: 'Sorry to see you go',
        text: `Hello ${name}, we're sorry to see you cancelled your account.  Please let me know if you have any feedback about the app.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}