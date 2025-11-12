import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "@/services/locale";
import { headers } from "next/headers";
import { defaultLocale } from "./config";

export default getRequestConfig(async () => {
   const headersList = await headers();
   const acceptLanguage = headersList.get('accept-language');
   let locale = defaultLocale;
   
   if(acceptLanguage?.toLowerCase().includes('pt')) {
      locale = 'pt-BR';
   }

   return {
      locale,
      messages: (await import(`@/i18n/locales/${locale}.json`)).default,
   }
})