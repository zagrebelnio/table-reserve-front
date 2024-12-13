import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from '@/lib/axios/axiosInstance';

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        userName: { label: 'userName', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error('No credentials provided');
        }
        try {
          console.log(credentials);
          const response = await axios.post('/auth/login', {
            userName: credentials?.userName,
            password: credentials?.password,
          });
          console.log('response', response);
          const token = response.data;

          if (!token) {
            throw new Error('No token returned from server');
          }

          return { token };
        } catch (error) {
          console.error('error', error);
          throw new Error(error.response?.data || 'Invalid credentials');
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export const POST = handler;
export const GET = handler;
