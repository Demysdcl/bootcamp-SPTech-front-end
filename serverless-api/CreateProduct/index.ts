import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import createMongoClient from "../shared/mongo-client";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const product = req.body;

  const { client: MongoClient, closeConnectionFn } = await createMongoClient();

  const Products = MongoClient.collection("products");

  const body = await Products.insert(product);

  closeConnectionFn();

  context.res = {
    status: 201 /* Defaults to 200 */,
    body,
  };
};

export default httpTrigger;
