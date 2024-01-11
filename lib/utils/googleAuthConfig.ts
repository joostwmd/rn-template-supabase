import { GoogleSignin } from "@react-native-google-signin/google-signin";

const googleWebClientId = process.env.EXPO_PUBLIC_GOOGLE_AUTH_CLIENT_ID;
export function configureGoogleSign() {
  GoogleSignin.configure({
    scopes: [], // what API you want to access on behalf of the user, default is email and profile
    webClientId: googleWebClientId, // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: "", // [Android] specifies an account name on the device that should be used
    profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  });
}
