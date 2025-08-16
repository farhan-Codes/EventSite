import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service:'gmail',
  port:465,
  secure:true,
  auth: {
    user:process.env.EMAIL_USER,
    pass:process.env.EMAIL_SECRET
  },
});


function getEmailTemplate({type,id,events,offline}){
    if(type == 'register'){
      return(
        `<!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8">
        <title>Registration Confirmation</title>
        <style>
            body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            }
            .container {
            max-width: 600px;
            margin: auto;
            background: #ffffff;
            padding: 20px;
            text-align: center;
            }
            .player-id {
            font-size: 28px;
            font-weight: bold;
            color: #333;
            margin-top: 20px;
            }
            .footer {
            margin-top: 30px;
            font-size: 12px;
            color: #777;
            }
        </style>
        </head>
        <body>
        <div class="container">
            <h2>Registration Successful 🎉</h2>
            <p>Your Player ID is:</p>
            <div class="player-id">${id}</div> <!-- Replace dynamically -->
            <p>Keep this ID safe for future reference.</p>
            ${(offline)?'<p>Show This Email At Event Booth To Confirm Your Registration😊</p>':''}
            <div class="footer">
            &copy; 2025 Tech-Parisara
            </div>
        </div>
        </body>
        </html>
        `)
    }
    else{
      return(
        `<!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8">
        <title>Approval Notification</title>
        <style>
            body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            }
            .container {
            max-width: 600px;
            margin: auto;
            background: #ffffff;
            padding: 20px;
            text-align: center;
            }
            .qr-image {
            margin-top: 20px;
            }
            .footer {
            margin-top: 30px;
            font-size: 12px;
            color: #777;
            }
        </style>
        </head>
        <body>
        <div class="container">
            <h2>Approval Successful ✅</h2>
            <p>Show this QR code at the event for entry:</p>
            <div class="qr-image">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${events}" alt="QR Code">
            <!-- Replace the data in QR URL dynamically -->
            </div>
            <div class="footer">
            &copy; 2025 Tech-Parisara
            </div>
        </div>
        </body>
        </html>
        `)
    }
}


export async function SendEmail({type,to,subject,id,events,offline}){
  const info = await transporter.sendMail({
    from: '"Tech-Parisara" <techparisra@gmail.com>',
    to:to,
    subject:subject,
    html:getEmailTemplate({type,id,events,offline}), // HTML body
  });
};
