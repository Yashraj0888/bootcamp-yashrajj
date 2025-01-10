import { NextAuth } from '@auth/nextjs';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../../../prisma/lib/prisma';
import fs from 'fs-extra';
import path from 'path';

const CLIENT_COMPANIES = ['example.com']; // Allowed domains
const WHITELISTED_EMAILS = ['admin@example.com']; // Specific emails

async function createProfileFolder(user: { id: string; name: string | null; email: string | null }) {
  const profilesDir = path.join(process.cwd(), 'public', 'placeholder');
  const userDir = path.join(profilesDir, user.id);

  if (!fs.existsSync(userDir)) {
    fs.mkdirSync(userDir, { recursive: true });
    fs.writeJsonSync(path.join(userDir, 'details.json'), {
      name: user.name || 'Unknown',
      email: user.email || 'Unknown',
    });

    // Placeholder files
    fs.copyFileSync(
      path.join(profilesDir, 'cv.pdf'),
      path.join(userDir, 'cv.pdf')
    );
    fs.copyFileSync(
      path.join(profilesDir, 'photo.jpg'),
      path.join(userDir, 'photo.jpg')
    );
  }
}

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    {
      id: 'google',
      name: 'Google',
      type: 'oauth',
      wellKnown: 'https://accounts.google.com/.well-known/openid-configuration',
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      checks: ['pkce', 'state'],
    },
  ],
  callbacks: {
    async signIn({ user }) {
      // ...
    },
    async linkAccount({ account }) {
      // Update the linkAccount function to match the expected type
      return Promise.resolve(account);
    },
  },
});
