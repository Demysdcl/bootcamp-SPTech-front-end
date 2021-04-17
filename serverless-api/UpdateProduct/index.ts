import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { ObjectID } from "mongodb";
import createMongoClient from "../shared/mongo-client";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const { id } = req.params;
  const product = req.body;

  const { client: MongoClient, closeConnectionFn } = await createMongoClient();

  const Products = MongoClient.collection("products");

  const body = await Products.findOneAndUpdate(
    { _id: new ObjectID(id) },
    { $set: product }
  );

  closeConnectionFn();

  context.res = {
    status: 202 /* Defaults to 200 */,
    body,
  };
};

export default httpTrigger;
