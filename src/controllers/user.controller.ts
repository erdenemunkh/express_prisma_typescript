import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { ApiResult } from "../classes/ApiResult";

const prisma = new PrismaClient();

export const addUser = async (req: Request, res: Response) => {
  try {
    const { email, name } = req.body;
    const result = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    res.status(200).send(new ApiResult(true, result, null));
  } catch (error) {
    res.status(200).send(new ApiResult(false, [], error));
  }
};

export const getUsers = async (_: Request, res: Response) => {
  try {
    const allUsers = await prisma.user.findMany();
    res.status(200).send(new ApiResult(true, allUsers, null));
  } catch (error) {
    res.status(200).send(new ApiResult(false, [], error));
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    res.status(200).send(new ApiResult(true, user, null));
  } catch (error) {
    res.status(200).send(new ApiResult(false, [], error));
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { email, name } = req.body;
    const user = await prisma.user.update({
      where: {
        email,
      },
      data: {
        name,
      },
    });
    res.status(200).send(new ApiResult(true, user, null));
  } catch (error) {
    res.status(200).send(new ApiResult(false, [], error));
  }
};

export const deletUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.delete({
      where: {
        id,
      },
    });
    res.status(200).send(new ApiResult(true, user, null));
  } catch (error) {
    res.status(200).send(new ApiResult(false, [], error));
  }
};
