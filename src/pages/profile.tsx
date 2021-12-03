import React, { useState, useEffect } from "react";
import { supabase } from "../components/util/supabase";
import router from "next/router";

const Profile = () => {
  const user = supabase.auth.user();
  const [inputData, setInputData] = useState({ username: "" });
  const { username } = inputData;

    useEffect(() => {
      const fetch = async () => {
        const { data, error } = await supabase
          .from("profile")
          .select()
          .eq("id", user.id);
        if (data != undefined) router.push("/");
        console.log("data", data);
        console.log("user.id", user.id);
      };
      fetch();
    }, []);

  const createProfile = async (e) => {
    e.preventDefault();
    if (!username) return;
    await supabase
      .from("profile")
      .insert([{ id: user.id, username, avatar_url: '', }]);
    setInputData({ username: "" });
  }
  return (
    <>
      <input
        placeholder="username"
        value={username}
        onChange={e => setInputData({ ...inputData, username: e.target.value })}
      />
      <button onClick={e => createProfile(e)}>プロフィール作成</button>
    </>
  );
}

export default Profile
