import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: "ap-south-1",
});

const docClient = DynamoDBDocumentClient.from(client);

export const handler = async () => {
  try {
    const command = new ScanCommand({
      TableName: "Events",
    });

    const response = await docClient.send(command);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(response.Items ?? []),
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: error.message,
      }),
    };
  }
};