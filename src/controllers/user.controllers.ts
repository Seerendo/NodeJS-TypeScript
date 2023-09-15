import { Request, Response } from "express";
import { User } from "../entities";

// En este caso el controlador está hecho de esta manera, pero toda la lógica de negocio tendría que estar en un service
//Se puede optimizar con trycatch

export async function createrUser(req: Request, res: Response) {
  const { body } = req;
  const result = await User.save(body);
  return res.status(201).json(result);
}

export async function getUsers(req: Request, res: Response) {
  const result = await User.find();
  return res.json(result);
}

export async function updateUser(req: Request, res: Response) {
  const { body, params } = req;

  const exist = await User.findOneBy({
    id: parseInt(params.id),
  });

  if (!exist) {
    res.status(404).send("No existe el usuario a actualizar");
  } else {
    const result = await User.update(params.id, body);
    res.json(result);
  }
}

export async function deleteUser(req: Request, res: Response) {
  const { params } = req;

  const exist = await User.findOneBy({
    id: parseInt(params.id),
  });

  if (!exist) {
    res.status(404).send("No existe el usuario eliminarr");
  } else {
    const result = await User.delete(params.id);
    res.json(result);
  }
}
