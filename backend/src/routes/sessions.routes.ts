import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticationUser = new AuthenticateUserService();

  const { user, token } = await authenticationUser.execute({
    email,
    password,
  });

  return response.json({ user, token });
});

export default sessionsRouter;
