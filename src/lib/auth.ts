import { PrismaClient } from "@prisma/client/edge";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { username } from "better-auth/plugins";
import { sendEmail, emailTemplates } from "./email";

const prisma = new PrismaClient();

// Type definitions for Better Auth email configuration
interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

interface EmailVerificationParams {
  url: string;
  user: {
    email: string;
  };
}

interface PasswordResetParams {
  url: string;
  user: {
    email: string;
  };
}

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET!,
  baseURL: process.env.BETTER_AUTH_URL!,
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  email: {
    from: {
      name: process.env.SMTP_FROM_NAME || "Lucy Ican",
      email: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || "noreply@lucy-ican.com",
    },
    sendEmail: async (emailOptions: EmailOptions) => {
      const { to, subject, html } = emailOptions;

      // Use our custom email sending function
      const success = await sendEmail({
        to,
        subject,
        html,
      });

      if (!success) {
        throw new Error("Failed to send email");
      }
    },
    templates: {
      emailVerification: (params: EmailVerificationParams) => {
        const template = emailTemplates.verification(params.url);
        return {
          subject: template.subject,
          html: template.html,
        };
      },
      passwordReset: (params: PasswordResetParams) => {
        const template = emailTemplates.passwordReset(params.url);
        return {
          subject: template.subject,
          html: template.html,
        };
      },
      magicLink: (params: EmailVerificationParams) => {
        const template = emailTemplates.verification(params.url);
        return {
          subject: "Your Magic Link",
          html: template.html.replace("Verify Your Email Address", "Your Magic Link")
                            .replace("Verify Email Address", "Sign In"),
        };
      },
    },
  },
  plugins: [username()],
});
