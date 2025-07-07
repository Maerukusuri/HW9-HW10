# API Test Automation — HW9 & HW10

This project contains automated API test scenarios for two backend endpoints:

Each set of tests covers key validation logic, decision outcomes and edge case handling to ensure reliability and security.

---

## `/test-orders` — HW9

Supports **GET**, **PUT**, and **DELETE** methods to manage test orders. Tests include valid cases, invalid input, and API key handling.

### Test Cases

| #   | Test Description                         | What’s Tested                | Expected Result  |
| --- | ---------------------------------------- | ---------------------------- | ---------------- |
| 1   | GET existing order                       | ID = 1                       | 200 OK           |
| 2   | GET non-existing order                   | ID = 999999                  | 400 Bad Request  |
| 3   | PUT valid update with API key            | Valid body + correct API key | 200 OK           |
| 4   | PUT with missing/invalid fields          | Invalid body                 | 400 Bad Request  |
| 5   | PUT with invalid API key                 | Wrong key                    | 401 Unauthorized |
| 6   | DELETE existing order with valid API key | ID = 1                       | 204 No Content   |
| 7   | DELETE with ID = 0                       | Edge case ID                 | 400 Bad Request  |
| 8   | DELETE non-existent ID                   | ID = 999999                  | 400 Bad Request  |

---

## `/loan-calc/decision` — HW10

Calculates loan risk and returns a loan decision. Tests cover risk levels, validation errors, and content type checks.

### Test Cases

| #   | Test Description                                | Input Example                           | Expected Result            |
| --- | ----------------------------------------------- | --------------------------------------- | -------------------------- |
| 1   | Low risk → positive decision                    | income: 4000, loan: 500                 | 200 OK, "positive"         |
| 2   | High risk → negative decision                   | income: 50000, age: 88, loan: 12000     | 200 OK, "negative"         |
| 3   | Negative income                                 | income: -666                            | 400 Bad Request            |
| 4   | Zero income                                     | income: 0                               | 400 Bad Request            |
| 5   | Wrong content-type (text/plain instead of JSON) | Content-Type: text/plain                | 415 Unsupported Media Type |
| 6   | Unemployed but low risk → positive              | income: 555, employed: false, loan: 666 | 200 OK, "positive"         |
| 7   | Age under 18                                    | age: 17                                 | 400 Bad Request            |
| 8   | Age over 100                                    | age: 101                                | 400 Bad Request            |
| 9   | Loan amount is not a number                     | loanAmount: "abc"                       | 400 Bad Request            |
| 10  | Missing required fields                         | No loanAmount or loanPeriod             | 400 Bad Request            |
| 11  | Extra/unknown field in request                  | unexpected: true                        | 200 OK (field ignored)     |
| 12  | Boundary income values                          | income near risk threshold              | 200 OK, correct decision   |

---

## 🔐 Security & Validation Tests

| #   | What’s Tested                                 | Status              |
| --- | --------------------------------------------- | ------------------- |
| 1   | PUT/DELETE require valid API key              | ✅ implemented      |
| 2   | Invalid/missing API key returns correct error | ✅ implemented      |
| 3   | Wrong content-type returns 415 error          | ✅ implemented      |
| 4   | Type mismatch (e.g. string instead of number) | ⚠️ partially tested |
| 5   | Extra/unknown fields don’t break the API      | ✅ handled          |

---
