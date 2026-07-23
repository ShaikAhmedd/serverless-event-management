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

    // Get authenticated user information from Cognito
const claims = event.requestContext?.authorizer?.claims;

if (!claims) {
  return {
    statusCode: 401,
    body: JSON.stringify({
      message: "Unauthorized"
    })
  };
}

const userId = claims["cognito:username"];
const email = claims.email;

    
    // Validate input
    if (!eventId) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "eventId is required"
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
    if (!eventId) {
  return {
    statusCode: 400,
    body: JSON.stringify({
      message: "eventId is required"
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
  eventId,
  userId,
  email,
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
      message: error.message,
      error: error.name,
      stack: error.stack
    })
  };
}