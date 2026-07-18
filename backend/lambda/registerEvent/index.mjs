import crypto from "crypto";

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  UpdateCommand
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
  try {
    // Get eventId from URL
    const eventId = event.pathParameters?.eventId;

    // Get userId from request body
    const body = JSON.parse(event.body || "{}");
    const { userId } = body;

    // Validate input
    if (!eventId || !userId) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "eventId and userId are required"
        })
      };
    }

    // Get the event from DynamoDB
    const eventResponse = await docClient.send(
      new GetCommand({
        TableName: "Events",
        Key: {
          eventId: eventId
        }
      })
    );

    // Check if event exists
    if (!eventResponse.Item) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          message: "Event not found"
        })
      };
    }

    const eventData = eventResponse.Item;

    // Check if the event is full
    if (eventData.registeredCount >= eventData.capacity) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "Event is full"
        })
      };
    }

    // Create registration
    const registration = {
      registrationId: crypto.randomUUID(),
      eventId: eventId,
      userId: userId,
      registeredAt: new Date().toISOString()
    };

    await docClient.send(
      new PutCommand({
        TableName: "Registrations",
        Item: registration
      })
    );

    // Increment registeredCount
    await docClient.send(
      new UpdateCommand({
        TableName: "Events",
        Key: {
          eventId: eventId
        },
        UpdateExpression: "SET registeredCount = registeredCount + :inc",
        ExpressionAttributeValues: {
          ":inc": 1
        }
      })
    );

    // Success response
    return {
      statusCode: 201,
      body: JSON.stringify({
        message: "Registration successful",
        registration
      })
    };

  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Internal Server Error"
      })
    };
  }
};