import { useSegments } from "expo-router";
import { useEffect, useState } from "react";
import { ReactNode } from "react";
import { LargeSecureStore, supabase } from "../utils/supabase";
import { Session } from "@supabase/supabase-js";
import { useRouter } from "expo-router";
type AuthGuardProps = {
  children: ReactNode;
};

function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const segments = useSegments();
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    console.log("path hook");
    async function getSession(): Promise<any> {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    }

    getSession();

    if (segments[0] !== "(public)" && !session) {
      router.push("/(public)/signin");
    }
  }, [segments]);

  useEffect(() => {
    console.log("session hook");

    if (segments[0] !== "(public)" && segments[0] !== "signin" && session) {
      console.log("goto profile");
    }
  }, [session]);

  return children;
}

export default AuthGuard;
