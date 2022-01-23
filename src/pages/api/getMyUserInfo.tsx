import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../util/supabase";

const user = supabase.auth.user();
const getMyUserInfo = async (req: NextApiRequest, res: NextApiResponse) => {
  // .select();で全カラム取得、.select(カラム名)で選択も可能
  const { data, error }: any = await supabase
    .from("users")
    .select()
    .eq("id", [user.id]);
  console.log("test");
  // 401 Unauthorized、認証が必要
  if (error) return res.status(401).json({ error: error.message });
  console.log("test02");
  // 200番台は、処理が成功して正常にレスポンスができている状態
  return res.status(200).json(data);
};

export default getMyUserInfo;
