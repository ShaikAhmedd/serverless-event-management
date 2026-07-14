import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: "ap-south-1",
});

const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body);

    const newEvent = {
      eventId: body.eventId,
      title: body.title,
      description: body.description,
      date: body.date,
      location: body.location,
      capacity: body.capacity,
      createdBy: body.createdBy || "admin",
      registeredCount: 0,
    };

    await docClient.send(
      new PutCommand({
        TableName: "Events",
        Item: newEvent,
      })
    );

    return {
      statusCode: 201,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Event created successfully",
        event: newEvent,
      }),
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Failed to create event",
        error: error.message,
      }),
    };
  }
};