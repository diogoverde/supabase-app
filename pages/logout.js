import { useRouter } from "next/router";
import { useEffect } from "react";
import { supabase } from "../utils/supabase";

const Logout = () => {
  const router = useRouter();
  useEffect(() => {
    const logout = async () => {
      supabase.auth.signOut();
      router.push("/");
    };
    logout();
  }, []);

  return <p>Logout</p>;
};

export default Logout;
