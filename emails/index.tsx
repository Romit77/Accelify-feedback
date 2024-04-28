import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface KoalaWelcomeEmailProps {
  userFirstname: string;
  message: string;
  UserEmail: String;
}

export const KoalaWelcomeEmail = ({
  userFirstname = "Admin",
  message,
  UserEmail,
}: KoalaWelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Linux Club Vitb</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          width="50"
          height="50"
          alt="Koala"
          style={logo}
        />
        <Text style={paragraph}>Hi {userFirstname},</Text>
        <Text style={paragraph}>The user gave the following feedback :</Text>
        {UserEmail && <Text style={paragraph}> User-Email: {UserEmail}</Text>}
        {message && <Text style={paragraph}>Message: {message}</Text>}
        <Section style={btnContainer}>
          <Button style={button} href="linux-vitb.vercel.app">
            Get started
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          Linux Club
        </Text>
        <Hr style={hr} />
        <Text style={footer}>Vitb , Sehore Mp </Text>
      </Container>
    </Body>
  </Html>
);

export default KoalaWelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "5px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
