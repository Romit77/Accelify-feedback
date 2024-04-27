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

interface WelcomeEmailProps {
  userFirstname: string;
  message: string;
}

export const WelcomeEmail = ({
  userFirstname = "User",
  message,
}: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Resource Rise</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          width="70"
          height="70"
          alt="RR"
          style={logo}
        />
        <Text style={paragraph}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          Welcome to Resource Rise, Explore the world of Linux with our club.
          Learn, collaborate, and delve into the power of open-source technology
          together.
        </Text>
        {message && <Text style={paragraph}>Message: {message}</Text>}
        <Section style={btnContainer}>
          <Button style={button} href="linux-vitb.vercel.app">
            Get started
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          Resource Rise
        </Text>
        <Hr style={hr} />
        <Text style={footer}>Vitb , Sehore Mp </Text>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;

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
