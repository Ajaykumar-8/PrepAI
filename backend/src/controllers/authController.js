import asyncHandler
  from "../utils/asyncHandler.js";

import {
  registerService,
  loginService,
} from "../services/authService.js";



/* Register */

export const registerUser =
  asyncHandler(
    async (req, res) => {

      const user =
        await registerService(req.body);

      res.status(201).json(user);
    }
  );



/* Login */

export const loginUser =
  asyncHandler(
    async (req, res) => {

      const user =
        await loginService(req.body);

      res.json(user);
    }
  );



/* Profile */

export const getProfile =
  asyncHandler(
    async (req, res) => {

      res.json(req.user);
    }
  );