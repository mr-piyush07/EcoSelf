import { futureSelfReply } from "../services/futureSelf.service.js";

export const futureSelfChat = async (req, res) => {
  const { message } = req.body;

  const reply = await futureSelfReply(message);

  res.json({ reply });
};
