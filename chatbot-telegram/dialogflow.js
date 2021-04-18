import dialogflow from "dialogflow";
import configs from "./ddemys-dialog.json";

const sessionClient = new dialogflow.SessionsClient({
  projectId: configs.project_id,
  credentials: {
    private_key: configs.private_key,
    client_email: configs.client_email,
  },
});

export async function sendMessage(chatId, message) {
  const session = sessionClient.sessionPath(configs.project_id, chatId);
  const request = {
    session,
    queryInput: {
      text: {
        text: message,
        languageCode: "pt-BR",
      },
    },
  };

  const responses = await sessionClient.detectIntent(request);
  const result = responses[0].queryResult;

  return {
    text: result.fulfillmentText,
    intent: result.intent.displayName,
    fields: result.parameters.fields,
  };
}
