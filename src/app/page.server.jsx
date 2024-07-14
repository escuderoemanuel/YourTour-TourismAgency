// src/app/page.server.jsx
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { headers, cookies } from 'next/headers';
import Home from './page';

export async function generateMetadata(locale) {
  const headersList = headers();
  const supabase = createServerComponentSupabaseClient({ headers: headersList, cookies });

  const { data: { session } } = await supabase.auth.getSession();

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      session,
    },
  };
}

export default async function HomePage({ locale }) {
  const translations = await serverSideTranslations(locale, ['common']);
  return <Home translations={translations} />;
}
