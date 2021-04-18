import "dotenv/config";
import TelegramBot from "node-telegram-bot-api";
import { sendMessage } from "./dialogflow";
import { searchVideoURL } from "./youtube";

const bot = new TelegramBot(process.env.TOKEN, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  console.log(msg.text);

  const messageResp = await sendMessage(chatId.toString(), msg.text);

  const responseText = messageResp.text;

  if (messageResp.intent === "Treino especifico") {
    responseText = await searchVideoURL(
      responseText,
      messageResp.fields.corpo.stringValue
    );
  }

  bot.sendMessage(chatId, responseText);
});
