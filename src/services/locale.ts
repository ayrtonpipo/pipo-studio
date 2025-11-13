'use server'

import { defaultLocale, Locale } from "@/i18n/config";
import { cookies, headers } from "next/headers";

const COOKIE_NAME = 'USER_LOCALE';

export async function getUserLocale() {
   const headersList = await headers();
   const acceptLanguage = headersList.get('accept-language');
   let locale = defaultLocale;
   
   if(acceptLanguage?.toLowerCase().includes('pt')) {
      locale = 'pt-BR';
   }

   return (await cookies()).get(COOKIE_NAME)?.value || locale;
}

export async function setUserLocale(locale: Locale) {
   (await cookies()).set(COOKIE_NAME, locale);
}