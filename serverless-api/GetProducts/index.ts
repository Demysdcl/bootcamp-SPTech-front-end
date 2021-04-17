import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import createMongoClient from "../shared/mongo-client";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const { client: MongoClient, closeConnectionFn } = await createMongoClient();

  const Products = MongoClient.collection("products");

  const res = await Products.find({});

  const body = await res.toArray();

  closeConnectionFn();

  context.res = {
    status: 200 /* Defaults to 200 */,
    body,
  };
};

export default httpTrigger;
