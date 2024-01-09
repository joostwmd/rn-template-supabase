import { useSegments } from "expo-router";
import { useEffect, useState } from "react";
import { ReactNode } from "react";
import { supabase } from "../utils/supabase";
type AuthGuardProps = {
  children: ReactNode;
};

function AuthGuard({ children }: AuthGuardProps) {
  const segments = useSegments();
  const [session, setSession] = useState<Session | null>(null);
  useEffect(() => {
    async function getSession(): Promise<any> {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    }

    getSession();
    console.log(session);

    if (segments[0] !== "(public)") {
      console.log("protected route");
      if (!session) {
        console.log("redirect to login");
        //logic here
      }
      //logic here
    }

    console.log("auth guard fired", segments);
  }, [segments]);

  return children;
}

export default AuthGuard;
import { createClient, Session } from "@supabase/supabase-js";
