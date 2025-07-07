# API Test Scenarios for `/test-orders`

This document describes the API test cases automated with Playwright for the `/test-orders` endpoint.

| #  | Scenario Description                                                             | Test Data                                                                                   | Expected Result           |
|----|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------|
| 1  | **GET**: Get an existing order by valid ID                                       | Order ID: `1`                                                                              | `StatusCodes.OK`          |
| 2  | **GET**: Get an order by non-existing ID                                        | Order ID: `999999`                                                                         | `StatusCodes.BAD_REQUEST` |
| 3  | **PUT**: Update an existing order with valid data and valid 16-digit API key     | Order ID: `1`<br>API Key: `1234567898765432` <br> Valid order data                          | `StatusCodes.OK`          |
| 4  | **PUT**: Update an order with invalid data (missing required fields)             | Order ID: `1`<br>Invalid data: `{ invalidField: "invalid" }`                               | `StatusCodes.BAD_REQUEST` |
| 5  | **PUT**: Update an order with invalid API key                                   | Order ID: `1`<br>API Key: `invalid_key`                                                   | `StatusCodes.UNAUTHORIZED`|
| 6  | **DELETE**: Delete an existing order with valid API key                         | Order ID: `1`<br>API Key: `1234567898765432`                                              | `StatusCodes.NO_CONTENT`  |
| 7  | **DELETE**: Delete a non-existent order with ID `0`                             | Order ID: `0`<br>API Key: `1234567898765432`                                              | `StatusCodes.BAD_REQUEST` |
| 8  | **DELETE**: Delete a non-existent order with ID `999999`                        | Order ID: `999999`<br>API Key: `1234567898765432`                                         | `StatusCodes.BAD_REQUEST` |
