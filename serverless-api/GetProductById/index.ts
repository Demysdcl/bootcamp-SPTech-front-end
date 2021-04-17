import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { ObjectID } from "mongodb";
import createMongoClient from "../shared/mongo-client";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const { id } = req.params;

  const { client: MongoClient, closeConnectionFn } = await createMongoClient();

  const Products = MongoClient.collection("products");

  const body = await Products.findOne({ _id: ObjectID(id) });

  closeConnectionFn();

  context.res = {
    status: 200 /* Defaults to 200 */,
    body,
  };
};

export default httpTrigger;
