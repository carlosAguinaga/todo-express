/* eslint-disable no-undef */
const { getTaskById } = require('../services/tasks.services');

describe('Test of services', () => {
  test('Debería traer una tarea con id 2', async () => {
    const task = await getTaskById(2);
    expect(task.id).toBe(2);
  });

  test('Debería traer una tarea con id 2', async () => {
    const task = await getTaskById('2');
    expect(task.id).toBe(2);
  });
});
