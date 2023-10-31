import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

export async function POST(req, res) {
  const reqBody = await req.json();

  console.log("_req => ", reqBody);
  // const { searchParams } = new URL(req.url);

  let ToEmail = reqBody.mailto;
  let subject = reqBody.subject;
  let mailbody = reqBody.mailbody;

  //const { searchParams } = new URL(req.url);
  // let ToEmail = searchParams.get("email");
  console.log(ToEmail);

  //Transporter
  const transporter = nodemailer.createTransport(
    smtpTransport({
      host: "mail.teamrabbil.com",
      port: 25, //465
      secure: false,
      auth: {
        user: "info@teamrabbil.com",
        pass: "~sR4[bhaC[Qs",
      },
      tls: { rejectUnauthorized: false },
    })
  );

  /// prepare Email
  let myEmail = {
    from: "Assignment:14 <info@teamrabbil.com>",
    to: ToEmail,
    subject: subject,
    text: mailbody,
  };

  try {
    let result = await transporter.sendMail(myEmail);
    return NextResponse.json({ msg: "Success" });
  } catch (e) {
    return NextResponse.json({ msg: "Email send Failed" });
  }
}
