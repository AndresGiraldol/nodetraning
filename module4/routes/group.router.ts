import express, { Request, Response } from "express";
import { GroupService } from "../services/Group.service";
import { Group } from "../interfaces/Group.interface";

const groupRouter = express.Router();
const groupService = new GroupService();

// GET ALL GROUPS
groupRouter.get("/", async (_req: Request, _res: Response) => {
  try {
    const users = await groupService.getAll();
    _res.json(users);
  } catch (err) {
    _res.status(500).json(err);
  }
});

// GET GROUP BY ID
groupRouter.get("/:id", async (_req: Request, _res: Response) => {
  try {
    const group = await groupService.getById(_req.params.id);
    if (group) {
      _res.json(group);
    } else {
      _res.status(404).json({ err: "Group not found" });
    }
  } catch (err) {
    _res.status(500).json(err);
  }
});

// CREATE NEW GROUP
groupRouter.post("/", async (_req: Request, _res: Response) => {
  try {
    const group: Group = { ..._req.body };
    await groupService.create(group);
    _res.json(group);
  } catch (err) {
    _res.status(500).json(err);
  }
});

// UPDATE GROUP
groupRouter.put("/:id", async (_req: Request, _res: Response) => {
  const group = { ..._req.body };
  try {
    await groupService.update(group, _req.params.id);
    _res.json(group);
  } catch (err) {
    _res.status(500).json(err);
  }
});

// DELETE GROUP
groupRouter.delete("/:id", async (_req: Request, _res: Response) => {
  const group = _req.params.id;
  try {
    await groupService.delete(group);
    _res.json(group);
  } catch (err) {
    _res.status(500).json(err);
  }
});

// ADD USERS TO A GROUPS
groupRouter.post(
  "/:groupId/addUsers",
  async (_req: Request, _res: Response) => {
    const groupId = _req.params.groupId;
    const { usersId } = _req.body;

    try {
      await groupService.addUsersToGroup(groupId, usersId);
      _res.json({
        groupId,
        usersId,
      });
    } catch (err) {
      console.log(err);
      _res.status(500).json(err);
    }
  }
);
export default groupRouter;
