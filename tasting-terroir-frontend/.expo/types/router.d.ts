/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/_sitemap` | `/screens/auth` | `/screens/auth/signIn` | `/screens/auth/signUp` | `/screens/collections` | `/screens/generalInformation` | `/screens/newTastingNote` | `/screens/newTastingNote/WineMainColorSelection` | `/screens/newTastingNote/newTastingNoteForm` | `/screens/newTastingNote/wineTypeSelection`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
