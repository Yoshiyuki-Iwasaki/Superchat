import React, { useState, useEffect } from "react";
import { supabase } from "../../../util/supabase";
import Presenter from "./presenter";

const EditProfile = () => {
  const user = supabase.auth.user();
  const [userList, setUserList] = useState<any>([]);
  const [inputData, setInputData] = useState<any>({ fullname: "" });
  const { fullname } = inputData;

  useEffect(() => {
    const fetch = async () => {
      const { data, error }: any = await supabase
        .from("users")
        .select()
        .eq("id", [user.id]);
      setUserList(data);
    };
    fetch();
  }, []);

  const UpdateProfile = async e => {
    if (!fullname) return;
    e.preventDefault();
    const { data, error } = await supabase
      .from("users")
      .upsert({ id: userList[0].id, fullname });
    setInputData({ fullname: "" });
  };

  return (
    <Presenter
      fullname={fullname}
      UpdateProfile={UpdateProfile}
      inputData={inputData}
      setInputData={setInputData}
    />
  );
};

export default EditProfile;
