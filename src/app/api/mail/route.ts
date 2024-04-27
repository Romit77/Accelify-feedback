import { render } from "@react-email/render";
import WelcomeTemplate from "../../../../emails";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request, res: Response) {
  const { message, userFirstname } = await request.json();

  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: "resourcerise17@gmail.com",
    subject: "test",
    html: render(WelcomeTemplate({ userFirstname, message })),
  });

  if (error) {
    return Response.json("error at route.ts");
  }
  return Response.json({ message: "Email sent successfully" });
}
