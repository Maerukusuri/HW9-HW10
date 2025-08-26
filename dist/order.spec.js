'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const test_1 = require('@playwright/test');
const http_status_codes_1 = require('http-status-codes');
const BASE_URL = 'https://backend.tallinn-learning.ee/mock-api'; // пример базового URL для моков
test_1.test.describe('Mocked Order Operations', () => {
  (0, test_1.test)('GET existing order by ID returns 200', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/order/1`);
    (0, test_1.expect)(response.status()).toBe(http_status_codes_1.StatusCodes.OK);
  });
  (0, test_1.test)('GET order by non-existing ID returns 404', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/order/999999`);
    (0, test_1.expect)(response.status()).toBe(http_status_codes_1.StatusCodes.NOT_FOUND);
  });
  (0, test_1.test)('DELETE existing order returns 204', async ({ request }) => {
    const response = await request.delete(`${BASE_URL}/order/1`);
    (0, test_1.expect)(response.status()).toBe(http_status_codes_1.StatusCodes.NO_CONTENT);
  });
  (0, test_1.test)('DELETE non-existing order returns 404', async ({ request }) => {
    const response = await request.delete(`${BASE_URL}/order/999999`);
    (0, test_1.expect)(response.status()).toBe(http_status_codes_1.StatusCodes.NOT_FOUND);
  });
  (0, test_1.test)('PUT update existing order with valid data returns 200', async ({ request }) => {
    const response = await request.put(`${BASE_URL}/order/1`, {
      data: {
        id: 1,
        petId: 123,
        quantity: 2,
        status: 'placed',
        complete: false,
      },
    });
    (0, test_1.expect)(response.status()).toBe(http_status_codes_1.StatusCodes.OK);
  });
  (0, test_1.test)('PUT update order with invalid data returns 400', async ({ request }) => {
    const response = await request.put(`${BASE_URL}/order/1`, {
      data: { invalidField: 'invalid' },
    });
    (0, test_1.expect)(response.status()).toBe(http_status_codes_1.StatusCodes.BAD_REQUEST);
  });
  (0, test_1.test)('PUT update non-existing order returns 404', async ({ request }) => {
    const response = await request.put(`${BASE_URL}/order/999999`, {
      data: {
        id: 999999,
        petId: 123,
        quantity: 1,
        status: 'placed',
        complete: false,
      },
    });
    (0, test_1.expect)(response.status()).toBe(http_status_codes_1.StatusCodes.NOT_FOUND);
  });
});
